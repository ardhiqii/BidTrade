import { useContext } from "react";
import AuthContent from "../component/Auth/AuthContent";
import { authStatechanged, login } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  async function loginHandler(email, password) {
    try {
      const credentialsUser = await login(email, password);
      console.log(credentialsUser);
      const idToken = credentialsUser._tokenResponse;
      authCtx.authenticate(idToken)
    } catch (e) {
      console.log(e);
    }
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
