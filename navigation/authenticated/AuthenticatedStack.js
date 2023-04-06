import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import AuctionScreen from "../../screens/auctionScreens/AuctionScreen";

const Stack = createNativeStackNavigator()

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator(){
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} />
        </BottomTab.Navigator>
    )
}

function AuthenticatedStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Auction" component={AuctionScreen}/>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default AuthenticatedStack