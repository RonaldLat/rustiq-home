import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyCYFptob_Bc8P9Kw7VqIA4rZq1k-sRFhT4",
  authDomain: "ronaldoti.firebaseapp.com",
  databaseURL: "https://ronaldoti-default-rtdb.firebaseio.com",
  projectId: "ronaldoti",
  storageBucket: "ronaldoti.appspot.com",
  messagingSenderId: "510097924583",
  appId: "1:510097924583:web:1e848a91e1d90d2bd21d42",
  measurementId: "G-JTP4QSKGHE"
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})
