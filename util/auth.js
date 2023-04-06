import { admin, auth } from "../config/firebase";
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
  const user = signInWithEmailAndPassword(auth, email, password);
  return user;
}

export function authStatechanged() {
  function currentUser(user) {
    if (user) {
      console.log(user);
    } else {
      console.log("Tidak ada user");
    }
  }
  onAuthStateChanged(auth, currentUser);
}

