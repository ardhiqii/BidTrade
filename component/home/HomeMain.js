import { ScrollView, StyleSheet, Text, View } from "react-native";
import BoxContent from "./BoxContent";
import AuctionsDisplay from "../auction/AuctionsDisplay";
import Carousel from "../ui/Carousel";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/user-context";
import { getDataUserById } from "../../util/user";
import { doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firebase";

function HomeMain() {
  const [dataUser,setDataUser] = useState()
  const [docs,setDocs] = useState()
  const [fetchingData,setFetchingData] = useState(true)
  // const userCtx = useContext(UserContext)
  // userCtx.updateDataUser('676oJOJCOZZZehTmxOdQCpviHX33')

  let unsubscribe
  function listenToADocument(){
    const id_user = '676oJOJCOZZZehTmxOdQCpviHX33'
    unsubscribe = onSnapshot(doc(db,`users/${id_user}`),(docSnapshot)=>{
      if(docSnapshot.exists()){
        const docData = docSnapshot.data()
        setDocs(docData)
        setDataUser(docData)
        setFetchingData(false)
      }
    })

  }
  useEffect(()=>{
    listenToADocument()
    return () => unsubscribe()
  },[])
  if(fetchingData){
    return <View>
      <Text>Loading mase</Text>
    </View>
  }
  
  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      contentContainerStyle={{ rowGap: 15 }}
    >
      <BoxContent>
        <Carousel />
      </BoxContent>
      <View>
        <BoxContent header={"Popular Auction"}>
          <AuctionsDisplay type={"popular"} />
        </BoxContent>
        <BoxContent header={"Recent Auction"}>
          <AuctionsDisplay type={"recent"} recentAuctions={dataUser.recent_auctions} />
        </BoxContent>
      </View>
    </ScrollView>
  );
}
export default HomeMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
