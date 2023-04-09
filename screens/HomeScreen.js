import { Button, Text, View } from "react-native";
import { auth } from "../config/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { UserContext } from "../store/user-context";
import LoadingOverlay from "../component/ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/core";
import HomeContent from "../component/home/HomeContent";

function HomeScreen() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  return <HomeContent />;
}

export default HomeScreen;
