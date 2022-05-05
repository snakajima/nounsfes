import { functions } from "@/utils/firebase";
import { httpsCallable } from "firebase/functions";

export const testFunctions = httpsCallable(functions, "test");
export const generateNonce = httpsCallable(functions, "generateNonce");
export const verifyNonce = httpsCallable(functions, "verifyNonce");
export const deleteNonce = httpsCallable(functions, "deleteNonce");

