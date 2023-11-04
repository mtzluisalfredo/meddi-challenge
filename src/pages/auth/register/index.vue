<template>
  <div class="flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <img src="https://meddi.app/public/loginv2/assets/MeddiLogo.8349898f.png" alt="Logo de la Compañía"
        class="h-20 mx-auto mb-4" />

      <h2 class="text-2xl font-semibold mb-4">Registro</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-medium mb-1">Nombre de Usuario (Email)</label>
          <input type="text" id="username" v-model="username" autocomplete="username"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-medium mb-1">Contraseña</label>
          <input type="password" id="password" v-model="password" autocomplete="new-password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-medium mb-1">Nombre</label>
          <input type="text" id="name" v-model="name" autocomplete="name"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required />
        </div>
        <div class="mb-4">
          <label for="cellphone" class="block text-gray-700 text-sm font-medium mb-1">Número de Teléfono</label>
          <input type="tel" id="cellphone" v-model="cellphone" autocomplete="tel"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required />
        </div>
        <button type="submit"
          class="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition duration-300"
          :disabled="loading">
          <span v-if="loading">Registrando...</span>
          <span v-else>Registrarse</span>
        </button>
      </form>
      <p class="mt-4 text-sm text-gray-600">¿Ya tienes una cuenta? <a href="/auth/login"
          class="text-blue-500 hover:underline">Inicia sesión</a></p>
    </div>
  </div>
</template>


<script lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';

export default {
  setup() {
    definePageMeta({
      layout: 'auth',
      middleware: 'auth'
    });
    const { loading, userRegister } = useAuthStore();

    const username = ref('');
    const name = ref('');
    const password = ref('');
    const cellphone = ref('');

    const register = async () => {
      userRegister({
        username: username.value,
        password: password.value,
        name: name.value,
        cellphone: cellphone.value,
      });
    };
    return {
      username,
      cellphone,
      name,
      password,
      register,
      loading,
    };
  },
};
</script>
