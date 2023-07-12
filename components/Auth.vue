<script setup>

const { registerUser, withGoogleRedirect, withGooglePopup } = useFirebaseAuth() // auto-imported


const creds = reactive({
  email: "mynam@lll.com",
  password: "lssseee"
})
 async function handleRegistration() {
   await registerUser(creds.email, creds.password)
}

</script>
<template>
    <div>
        <h2>Auth component</h2>
        <div>
            <p>{{creds.email}}</p>
            <form @submit.prevent="handleRegistration">
                <input type="text" placeholder="example@email.com" v-model="creds.email">
                <input type="text" v-model="creds.password">
                <button type="submit">Submit</button>
            </form>
        </div>

        <h3>Sign in with ?</h3>
        <button @click.prevent="withGoogleRedirect">Sign In With Google</button><br/>
        <button @click.prevent="withGooglePopup" >In With Popup</button>
    </div>

</template>
