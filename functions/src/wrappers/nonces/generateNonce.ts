import * as functions from "firebase-functions";

import { generateNonce } from "../../functions/ethereum";

export default functions.https.onCall(async (data, context) => {
  return await generateNonce(data, context);
});
