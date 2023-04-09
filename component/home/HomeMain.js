import { ScrollView, StyleSheet } from "react-native"
import BoxContent from "./BoxContent"
import AuctionsDisplay from "../auction/AuctionsDisplay"



function HomeMain(){
return <ScrollView style={styles.container}>
    <BoxContent header={'Brand'}></BoxContent>
    <BoxContent header={'Popular Auction'}>
        <AuctionsDisplay/>
    </BoxContent>
</ScrollView>
}
export default HomeMain

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})