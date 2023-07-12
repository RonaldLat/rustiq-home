import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function() {
  const { $storage } = useNuxtApp()
  //const imagesRef = ref($storage, 'inventory/');
  const imagesRef = 'hii'



  const uploadImage=()=>{
    console.log(imagesRef)
  }



    return{uploadImage}

  }


