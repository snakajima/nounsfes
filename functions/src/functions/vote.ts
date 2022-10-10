import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}
const firestore = admin.firestore();

//export const vote_events = functions.https.onRequest(express.app);

export const vote = async (data:any, context:any) => {
  const {voteEventId, selectionId,uid} = data;
  if (!context.auth || !context.auth.uid) {
    return {
        result: false,
        message: "no auth"
      };
    }
  if (context.auth.uid != uid){
    console.log(`param uid:${uid} context:${context.auth.uid}`)
    return {
        result: false,
        message: "invalid uid"
      };
  }

  const vote_eventRef = await firestore.doc(`/vote_events/${voteEventId}`).get();
  console.log(vote_eventRef);
  //don't create selection doc for 2022 fes contest 
  //const selectionRef = await firestore.doc(`/vote_events/${voteEventId}/votes/${selectionId}`).get();

  // check vote_event, and answer.
  if (!vote_eventRef.exists) {
    return {
      result: false,
      message: "no data"
    };
  }

  
  const voteLogRef = await firestore.doc(`/users/${uid}/private/votes`).get();
  
  const voteLog = voteLogRef.data() || {voted: {}};
  
  if (!voteLog.voted) {
    return {
      result: false,
      message: "invalid data"
    };
  }

  // check user's vote not yet
  if (voteLog.voted[voteEventId]) {
    return {
      result: false,
      message: "voted"
    };
    
  }

  // update summary

  // todo move to create vote_event;
  await admin.firestore().runTransaction(async (tr) => {
    const path = `/vote_events/${voteEventId}/results/${selectionId}`;
    const vote_eventSummaryRef = await tr.get(firestore.doc(path));
    if (!vote_eventSummaryRef.exists) {
      await tr.set(firestore.doc(path), {});
    }

    await tr.update(firestore.doc(path),
                    {counter: admin.firestore.FieldValue.increment(1)});
  
    // add log
    voteLog.voted[voteEventId] = true;

    await tr.set(firestore.doc(`/users/${uid}/private/votes`), voteLog);
  });

  return {
    result: true
  };
  
};