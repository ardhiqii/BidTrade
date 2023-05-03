import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import AuctionScreen from "../../screens/auctionScreens/AuctionScreen";
import AddAuctionScreen from "../../screens/auctionScreens/AddAuctionScreen";

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{
      headerTintColor:'white',
      headerStyle:{
        backgroundColor:'#3072e8',
        elevation:0,
      },
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Browse",
          headerTitleStyle:{
            fontSize:30
          },
          headerTintColor:'white',
          headerStyle:{
            backgroundColor:'#3072e8',
            elevation:0,
            height:110,
          },
          
        }}
      />
      <BottomTab.Screen name="AddAuction" component={AddAuctionScreen} />
    </BottomTab.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Auction"
        component={AuctionScreen}
        options={{
          headerTransparent: true,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedStack;
