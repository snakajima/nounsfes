import { initializeApp } from "firebase/app";

import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { firebaseConfig } from "../config/project";

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const functions = getFunctions(firebaseApp);

if (firebaseConfig.useEmulator) {
    console.log("firebase emulator mode");
    // Note: for Auth Emulator need "http://localhost",
    // if only "localhost" it cause following error
    // Firebase: Error (auth/invalid-emulator-scheme).
    connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
    connectFirestoreEmulator(db, "localhost", 8095);
    connectFunctionsEmulator(functions, "localhost", 5002);
  }
  