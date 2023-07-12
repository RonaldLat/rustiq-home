<script setup>
const { registerUser } = useFirebaseAuth() // auto-imported


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
    </div>

</template>
