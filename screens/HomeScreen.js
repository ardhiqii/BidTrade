import { Text, View } from "react-native";
import { auth } from "../config/firebase";

function HomeScreen(){ 
    let userName
    const user = auth.currentUser
    if(user){
        userName = user.displayName
    }
    return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Home Page</Text>
        <Text>Welcome {userName}</Text>
    </View>
}

export default HomeScreen