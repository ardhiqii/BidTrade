import { useContext } from "react";
import AuthContent from "../component/Auth/AuthContent";
import { authStatechanged, login } from "../util/auth";
import { AuthContext } from "../store/auth-context";
import { UserContext } from "../store/user-context";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext)
  async function loginHandler(email, password) {
    try {
      const credentialsUser = await login(email, password);
      const idToken = credentialsUser._tokenResponse.idToken;
      userCtx.updateDataUser(credentialsUser.user)
      authCtx.authenticate(idToken);
    } catch (e) {
      console.log(e);
    }
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
