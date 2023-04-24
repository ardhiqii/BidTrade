import { useContext, useEffect, useState } from "react";
import AuthContent from "../component/Auth/AuthContent";
import { login } from "../util/auth";
import { AuthContext } from "../store/auth-context";
import { UserContext } from "../store/user-context";
import { Alert, StyleSheet } from "react-native";
import LoadingOverlay from "../component/ui/LoadingOverlay";
import ModalAuctionProduct from "../component/auction/modal/ModalAuctionProduct";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  async function loginHandler(email, password) {
    setIsAuthenticating(true);
    try {
      const credentialsUser = await login(email, password);
      const idToken = credentialsUser._tokenResponse.idToken;

      userCtx.updateDataUser(credentialsUser.user);
      authCtx.authenticate(idToken);
    } catch (e) {
      if (e.code === "auth/user-not-found") {
        Alert.alert("Failed to Login", "Incorrect email or password");
      }
      // console.log(e.code);
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <AuthContent isLogin onAuthenticate={loginHandler} />
      <ModalAuctionProduct styles={styles.modalStyles}/>
    </>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  modalStyles:{
    height:'100%',
  }
})
