import { StyleSheet, Text, TextInput, View } from "react-native";
import {Ionicons} from "@expo/vector-icons"

function Search(){
    return <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Ionicons name="md-search" color={'#3072e8'} size={25} />
            <TextInput placeholder="Search Auction, brand or user"/>
        </View>
    </View>
}

export default Search

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#3072e8',
        paddingHorizontal:18,
        paddingBottom:20,
    },
    searchContainer:{
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:5,
        flexDirection:'row',
        columnGap:5
    }
})