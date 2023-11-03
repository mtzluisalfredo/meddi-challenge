<template>
  <div class="flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <img src="https://www.finware.mx/images/logo-finware-header.svg" alt="Logo de la Compañía"
        class="w-20 h-20 mx-auto mb-4" />

      <h2 class="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-medium mb-1">Correo Electrónico</label>
          <input type="email" id="current-email" v-model="email" autocomplete="current-email"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-medium mb-1">Contraseña</label>
          <input type="password" id="current-password" v-model="password" autocomplete="current-password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            required />
        </div>
        <button type="submit"
          class="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition duration-300"
          :disabled="loading">
          <span v-if="loading">Cargando...</span>
          <span v-else>Iniciar Sesión</span>
        </button>
      </form>
      <p class="text-center mt-4">
        ¿No tienes una cuenta? <a href="/auth/register" class="text-blue-500">Regístrate aquí</a>
      </p>
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
    })
    const { logUserIn, loading } = useAuthStore();

    const email = ref('');
    const password = ref('');

    const login = async () => {
      logUserIn({
        username: email.value,
        password: password.value
      });
    };
    return {
      email,
      password,
      login,
      loading,
    };
  },
};
</script>
