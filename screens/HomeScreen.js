import { Button, Text, View } from "react-native";
import { auth } from "../config/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { UserContext } from "../store/user-context";
import LoadingOverlay from "../component/ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/core";

function HomeScreen() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const nav = useNavigation()
  function auctionHandler(){
    nav.navigate('Auction')
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
      <Text>Welcome {userCtx.user.displayName}</Text>
      <Button title="to Auction" onPress={auctionHandler} />
    </View>
  );
}

export default HomeScreen;
