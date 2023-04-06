import { View } from "react-native";
import AuthContent from "../component/Auth/AuthContent";
import { createUser } from "../util/auth";
import { UserContext } from "../store/user-context";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import LoadingOverlay from "../component/ui/LoadingOverlay";
export function SignupScreen() {
  const [isAuthenticating,setIsAuthenticating] = useState(false)
  const userCtx = useContext(UserContext)
  const authCtx = useContext(AuthContext);
  async function SignupHandler(email, password, fullName) {
    setIsAuthenticating(true)
    try {
      const credentialsUser = await createUser(email, password, fullName);
      const idToken = credentialsUser._tokenResponse.idToken;
      userCtx.updateDataUser(credentialsUser.user)
      authCtx.authenticate(idToken);
    } catch (e) {
      console.log(e);
      setIsAuthenticating(false)
    }
  }
  if(isAuthenticating){
    return <LoadingOverlay/>
  }
  return <AuthContent onAuthenticate={SignupHandler} />;
}
export default SignupScreen;
