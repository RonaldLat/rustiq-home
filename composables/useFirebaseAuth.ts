import { createUserWithEmailAndPassword, GoogleAuthProvider,signInWithRedirect, signInWithPopup, User} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()

  const user = useState<User | null>("fb_user", () => null)
  const provider = new GoogleAuthProvider();


  const registerUser =  (email, password)=> {
    createUserWithEmailAndPassword($auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode)
    // ..
  });

  }

  const withGoogleRedirect = ()=>{
    signInWithRedirect($auth, provider);
  }
 const withGooglePopup=() =>{
   signInWithPopup($auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
 }

  return {
    user,
    registerUser,
    withGoogleRedirect,
    withGooglePopup
  }
}
