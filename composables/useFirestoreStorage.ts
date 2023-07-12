import { ref as storageRef, uploadBytes,getStorage, getDownloadURL } from "firebase/storage";


export default function() {
  const { $storage } = useNuxtApp()
  const storeRef = storageRef($storage, 'lll')
  //const imagesRef = storageRef ($storage, 'invntory');



  const uploadImage=()=>{

// 'file' comes from the Blob or File API
console.log(storeRef)


  }



    return{uploadImage}

  }


