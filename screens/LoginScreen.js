import { useContext } from "react"
import AuthContent from "../component/Auth/AuthContent"
import { AuthContext } from "../store/auth-context"

function LoginScreen(){
    const {authenticate,token} = useContext(AuthContext)
    function loginHandler(email,password){
        console.log(email);
        authenticate(email)
        console.log(token);
    }
    return <AuthContent isLogin onAuthenticate={loginHandler}/>
}

export default LoginScreen