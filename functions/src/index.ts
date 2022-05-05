import * as admin from "firebase-admin";
import exportIfNeeded from "./common/exportifneeded";

if (!admin.apps.length) {
  admin.initializeApp();
}

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exportIfNeeded("test", "tests/test", exports);

exportIfNeeded("verifyNonce", "nonces/verifyNonce", exports);
exportIfNeeded("generateNonce", "nonces/generateNonce", exports);
exportIfNeeded("deleteNonce", "nonces/deleteNonce", exports);
