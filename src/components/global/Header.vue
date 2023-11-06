<template>
  <header class="bg-nepal-300 p-4 px-24 flex items-center justify-between">
    <div class="flex items-center space-x-2 h-7">
      <img :src="useAsset(logo)" alt="meddie logo" class="w-20" />
      <h1 v-if="title && !!isAuth" class="text-black text-lg font-semibold">
        {{ title }}
      </h1>
    </div>
    <nav v-if="!!isAuth" class="space-x-4">
      <a v-for="(item, index) in navigationLinks" :key="index" :href="item.link" class="text-black hover:underline">
        {{ item.text }}
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { useAuthStore } from '~/store/auth';

export default {
  name: 'Header',
  props: {
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: ''
    },
    isAuth: {
      type: Boolean,
    }
  },
  setup() {
    definePageMeta({
      middleware: 'auth'
    })
    const { logUserIn, loading, authenticated } = useAuthStore();

    return {
      isAuth: authenticated,
      loading,
      navigationLinks: [
        { text: "Inicio", link: "/" },
        { text: "Acerca", link: "/acerca" },
        { text: "Contacto", link: "/contacto" }
        // Agrega más enlaces según sea necesario
      ]
    };
  },
};
</script>