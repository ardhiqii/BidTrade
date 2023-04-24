import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "../config/firebase";

  export async function updateAuctionPrice(idBidder,id_product,price) {
    console.log(price);
    try {
        await updateDoc(doc(db,`auctions/${id_product}`),{
          'id_last_bid':idBidder,
            'current_price':price
        })
    } catch (e) {
      console.log(e);
    }
  }
  