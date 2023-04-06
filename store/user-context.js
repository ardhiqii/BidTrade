import AsyncStorage from "@react-native-async-storage/async-storage";
import {  createContext, useState } from "react";

export const UserContext = createContext({
    user:{},
    updateDataUser: ()=>{},
})

function UserContextProvider({children}){
    const [dataUser,setDataUser]= useState({})
    function updateDataUser(data){
        setDataUser(data)
        // AsyncStorage.setItem('uid',data.uid)
    }

    const value = {
        user:dataUser,
        updateDataUser:updateDataUser
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
export default UserContextProvider