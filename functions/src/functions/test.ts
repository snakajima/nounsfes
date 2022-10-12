import * as functions from "firebase-functions";
import * as tokengate from "./tokengate";
export const test = async (
  data: {addr:string,token:string},
  context: functions.https.CallableContext
) => {
  console.log(await tokengate.checkTokenGate(data.addr,data.token));
  const uid = context?.auth?.uid;
  console.log(uid, data);
  return {};
};
