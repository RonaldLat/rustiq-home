<script setup>
const user = useSupabaseUser()
const client = useSupabaseAuthClient()



let showMenu = ref(false);
onMounted(()=>{
    watchEffect(()=>{
        if(!user.value){
            console.log('logged out')
        }else{
        console.log(user.value.email)
        }

    })
})
//logoutUser()

//const { data: { user } } = await supabase.auth.getUser()

</script>

<template>
  <div class="bg-indigo-600">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <nuxt-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
          >Home
        </nuxt-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >

      <li @click="client.auth.signOut()" v-if="user" class="text-gray-100 border p-2 rounded border-gray-300 hover:text-indigo-400">Log Out<br/> {{user.email}}</li>
            <button v-else class="text-gray-100 hover:text-indigo-400">Log In</button>
        <li>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">About</li>
        <li class="text-gray-100 hover:text-indigo-400">Blogs</li>
        <li class="text-gray-100 hover:text-indigo-400">Contact Us</li>
      </ul>
    </nav>
  </div>
</template>
