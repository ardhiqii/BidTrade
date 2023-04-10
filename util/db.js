import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getDataAuctionWithId(id_product) {
  const snapShot = await getDoc(doc(db, `auctions/${id_product}`));
  const data = snapShot.data();
  return data;
}

export async function getDatasAuction() {
  const snapShot = await getDocs(collection(db, "auctions"));
  const allDocs = snapShot?.docs.map(doc => doc.data())
  return allDocs;
}
