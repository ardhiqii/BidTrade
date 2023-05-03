import {
  doc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function getDataAuctionWithId(id_product) {
  const snapShot = await getDoc(doc(db, `auctions/${id_product}`));
  const data = snapShot.data();
  return data;
}

export async function getDatasAuction(idProducts) {
  let snapShot;
  let allDocs;
  if (idProducts) {
    const q = query(collection(db, "auctions"), where("id", "in", idProducts));
    snapShot = await getDocs(q);
  } else {
    snapShot = await getDocs(collection(db, "auctions"));
  }

  allDocs = snapShot?.docs.map((doc) => doc.data());
  return allDocs;
}

