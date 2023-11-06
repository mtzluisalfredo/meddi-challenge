<template>
  <div>
    <Header title="Dashboard" :isAuth="isAuth" logo="images/meddi_blue.png" />
    <main class="flex-grow p-8 px-24 min-h-[calc(100vh-theme(space.48))]">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore();

const isAuth = computed(() => {

  return authStore?.authenticated;
});

</script>