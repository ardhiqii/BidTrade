import { Text, View } from "react-native";
import { auth } from "../config/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { useJwt } from "react-jwt";
import { UserContext } from "../store/user-context";
import LoadingOverlay from "../component/ui/LoadingOverlay";

function HomeScreen() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
      <Text>Welcome {userCtx.user.displayName}</Text>
    </View>
  );
}

export default HomeScreen;
