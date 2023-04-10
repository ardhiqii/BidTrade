import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";


export async function getDataUserById(id_user){
    const snapShot = await getDoc(doc(db,`users/${id_user}`))
    const data = snapShot.data()
    return data
}

export async function updateDataUserById(id_user,data){
    // await updateDoc(doc(db,`users/${id_user}`),data)
}

export async function updateDataRecentUser(id_user,id_product){
    await updateDoc(doc(db,`users/${id_user}`),{
        'recent_auctions':arrayUnion(id_product)
    })
}