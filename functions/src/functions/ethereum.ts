import * as functions from "firebase-functions";
import * as util from "ethereumjs-util";
import * as admin from "firebase-admin";

const db = admin.firestore();

// The user will see this message when MetaMask makes a "Signature Request"
// to the user.
const readableMessage =
  "Welcome to nidentify.com!\n\n" +
  "Please click \"Sign\" to sign in to unleash the power of your NFTs.\n\n" +
  "Nonce:\n";

export const generateNonce = async (
  data: { account: string },
  context: functions.https.CallableContext
) => {
  const refNonces = db.collection("nonces");
  const { account } = data;
  const newData = {
    account,
    created: admin.firestore.FieldValue.serverTimestamp(),
  };
  const refDoc = await refNonces.add(newData);
  const uuid = refDoc.id;
  return { nonce: readableMessage + uuid, uuid };
};

export const verifyNonce = async (
  data: { signature: string; uuid: string },
  context: functions.https.CallableContext
) => {
  const { signature, uuid } = data;
  const message = readableMessage + uuid;
  const nonce = "\x19Ethereum Signed Message:\n" + message.length + message;
  const nonceBuffer = util.keccak(Buffer.from(nonce, "utf-8"));
  const { v, r, s } = util.fromRpcSig(signature);
  const pubKey = util.ecrecover(util.toBuffer(nonceBuffer), v, r, s);
  const addrBuf = util.pubToAddress(pubKey);
  const account = util.bufferToHex(addrBuf);

  const refNonce = db.collection("nonces").doc(uuid);
  const nonceDoc = await refNonce.get();
  const nonceData = nonceDoc.data();
  await refNonce.delete();
  if (nonceData?.account != account) {
    return { error: "no nonce in the database" };
  }

  const auth = admin.auth();
  const token = await auth.createCustomToken(account);
  return { token };
};

export const deleteNonce = async (
  data: { account: string; uuid: string },
  context: functions.https.CallableContext
) => {
  const { account, uuid } = data;

  const refNonce = db.collection("nonces").doc(uuid);
  const nonceDoc = await refNonce.get();
  const nonceData = nonceDoc.data();
  if (nonceData?.account != account) {
    return { error: "no nonce in the database" };
  }
  await refNonce.delete();
  return { success: true };
};
