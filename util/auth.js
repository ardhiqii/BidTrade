import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
export async function createUser(email, password, fullName) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(auth.currentUser, { displayName: fullName });
  return user;
}

export function login(email, password) {
  const user =  signInWithEmailAndPassword(auth, email, password); 
  return user;
}
