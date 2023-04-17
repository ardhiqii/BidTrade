import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "../config/firebase";

  export async function updateAuctionPrice(id_product,price) {
    try {
        await updateDoc(doc(db,`auctions/${id_product}`),{
            'current_price':price
        })
    } catch (e) {
      console.log(e);
    }
  }
  