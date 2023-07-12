import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyCeL5W7vl-eaxXbN7TDBCe5f8Fa6vnVcAU",
  authDomain: "rustiq-2ec50.firebaseapp.com",
  projectId: "rustiq-2ec50",
  storageBucket: "rustiq-2ec50.appspot.com",
  messagingSenderId: "809211688846",
  appId: "1:809211688846:web:26ba778c172827ec1796df",
  measurementId: "G-08VEGHTD1F"
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)

    nuxtApp.vueApp.provide('storage', storage)
    nuxtApp.provide('storage', storage)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

})
