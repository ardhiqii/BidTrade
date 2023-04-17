import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function getDataUserById(id_user) {
  const snapShot = await getDoc(doc(db, `users/${id_user}`));
  const data = snapShot.data();
  return data;
}

export async function updateDataUserById(id_user, data) {
  // await updateDoc(doc(db,`users/${id_user}`),data)
}

export async function updateDataRecentUser(id_user, id_product) {
  try {
    const data = await getDataUserById(id_user);
    const arr = data.recent_auctions;
    console.log(arr);
    if (arr.length === 5) {
      await updateDoc(doc(db, `users/${id_user}`), {
        recent_auctions: arrayRemove(arr[0]),
      });
    }
    await updateDoc(doc(db, `users/${id_user}`), {
      recent_auctions: arrayUnion(id_product),
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createDataUser(id_user, fullName) {
  await setDoc(doc(db, `users/${id_user}`), {
    full_name: fullName,
    recent_auctions: [],
  });
}
