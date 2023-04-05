import { View, StyleSheet, Text, Alert } from "react-native";
import AuthForm from "./AuthForm";
import FlatButton from "../ui/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";

function AuthContent({ isLogin, onAuthenticate }) {
  const nav = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    fullName: false,
  });
  function switchAuthModeHandler() {
    if (isLogin) {
      nav.navigate("Signup");
    } else {
      nav.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { enteredEmail, enteredPassword, enteredFullName } = credentials;

    enteredEmail = enteredEmail.trim();
    enteredPassword = enteredPassword.trim();

    const emailIsValid = enteredEmail.includes("@");
    const passwordIsValid = enteredPassword.length > 6;
    const fullNameIsValid = enteredFullName.length > 1;
    if (!emailIsValid || !passwordIsValid || (!isLogin && !fullNameIsValid)) {
      Alert.alert("Invalid input", "Please check your entered credentials");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        fullName: !fullNameIsValid,
      });
      return;
    }
    onAuthenticate(enteredEmail, enteredPassword, enteredPassword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {isLogin ? "Welcome" : "Create Account"}
        </Text>
      </View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}
export default AuthContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
    rowGap: 35,
  },
  header: {
    marginBottom: 25,
  },
  headerText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
