import { collection, getDocs } from "firebase/firestore";


export default function() {
  const { $firestore, $auth } = useNuxtApp()

 const readData=async()=>{
    const querySnapshot = await getDocs(collection($firestore, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
  }

    return{readData}

  }


