import { createUserWithEmailAndPassword, User} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()

  const user = useState<User | null>("fb_user", () => null)


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

  return {
    user,
    registerUser
  }
}
