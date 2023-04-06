import { View } from "react-native";
import AuthContent from "../component/Auth/AuthContent";
import { createUser } from "../util/auth";
export function SignupScreen() {
  async function SignupHandler(email, password, fullName) {
    try {
      const user = await createUser(email, password, fullName);
    } catch (e) {
      console.log(e);
    }
  }

  return <AuthContent onAuthenticate={SignupHandler} />;
}
export default SignupScreen;
