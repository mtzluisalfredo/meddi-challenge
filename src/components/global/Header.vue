<template>
  <header class="bg-sblue-500 p-4 px-24 flex items-center justify-between">
    <div class="flex items-center space-x-2 h-7">
      <!-- Imagen del logo (usando el prop logo) -->
      <img :src="logo" alt="Logo de la App" class="w-20" />
      <!-- Título de la App -->
      <h1 v-if="title && !isAuth"  class="text-black text-lg font-semibold">{{ title }}</h1>
    </div>
    <!-- Menú -->
    <nav v-if="!isAuth" class="space-x-4">
      <a href="/" class="text-black hover:underline">Inicio</a>
      <a href="/acerca" class="text-black hover:underline">Acerca</a>
      <a href="/contacto" class="text-black hover:underline">Contacto</a>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  props: {
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String
    },
    isAuth: {
      type: Boolean,
    }
  },
};
</script>