import * as functions from "firebase-functions";

import { vote } from "../../functions/vote";

export default functions
.runWith({
  memory: "1GB",
})
.https.onCall(async (data, context) => {
  return await vote(data, context);
});
