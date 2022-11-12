import * as functions from "firebase-functions";

import { getResult } from "../../functions/vote";

export default functions
.runWith({
  memory: "1GB",
})
.https.onCall(async (data, context) => {
  return await getResult(data, context);
});
