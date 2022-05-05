import * as functions from "firebase-functions";

import { verifyNonce } from "../../functions/ethereum";

export default functions.https.onCall(async (data, context) => {
  return await verifyNonce(data, context);
});
