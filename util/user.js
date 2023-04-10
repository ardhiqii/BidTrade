import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";


export async function getDataUserById(id_user){
    const snapShot = await getDoc(doc(db,`users/${id_user}`))
    const data = snapShot.data()
    return data
}