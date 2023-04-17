import { StatusBar } from "expo-status-bar";
import "./config/firebase";
import { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import FirstLoadingScreen from "./screens/FirstLoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import SignupScreen from "./screens/SignupScreen";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import UserContextProvider from "./store/user-context";
import AuthenticatedStack from "./navigation/authenticated/AuthenticatedStack";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
      
    </NavigationContainer>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  onLayoutRootView();
  if (!appIsReady) {
    return <FirstLoadingScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <AuthContextProvider>
          <UserContextProvider>
            <Navigation />
          </UserContextProvider>
        </AuthContextProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
