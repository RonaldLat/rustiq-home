<template>
    <div>
        <button @click="showRegister = !showRegister">Toggle Register/Login</button>

        <label @change="showRegister = !showRegister" class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Large toggle</span>
</label>

        <!-- Conditionally render components based on showRegister state -->
        <template v-if="showRegister">
            <Register />
        </template>
        <template v-else>
            <Login />
        </template>
    </div>
</template>

<script setup>

// Create a reactive state object to manage the showRegister state
const state = reactive({
    showRegister: true, // Show Register component initially
});
const showRegister = ref(state.showRegister);

</script>

