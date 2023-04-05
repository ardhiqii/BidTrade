import { View,StyleSheet,Text } from "react-native";
import AuthForm from "./AuthForm";
import FlatButton from "../ui/FlatButton";

function AuthContent({ isLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Account</Text>
      </View>
      <AuthForm isLogin={isLogin} />
      <View>
        <FlatButton>
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
    justifyContent:'center',
    rowGap:35
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
