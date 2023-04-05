// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPLMyUK3sypfnhfFooQeNSQmfq6SqbnaI",
  authDomain: "bidtrade-710bf.firebaseapp.com",
  projectId: "bidtrade-710bf",
  storageBucket: "bidtrade-710bf.appspot.com",
  messagingSenderId: "1029652502235",
  appId: "1:1029652502235:web:e4c7057271fdfc4aef5efe"
};

// Initialize Firebase
let app
if(firebase.apps.length === 0){
    app = firebase.intializeApp(firebaseConfig)
} else{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}