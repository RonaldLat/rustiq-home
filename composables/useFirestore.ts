import { collection, addDoc, getDocs } from "firebase/firestore";


export default function() {
  const { $firestore, $auth } = useNuxtApp()

  const addData=async(collectionRef, data: Object)=>{
    try {
  const docRef = await addDoc(collection($firestore, collectionRef), data)

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }


  const readData=async(path)=>{
    const querySnapshot = await getDocs(collection($firestore, path));
    return querySnapshot
  }

    return{addData,readData}

  }

