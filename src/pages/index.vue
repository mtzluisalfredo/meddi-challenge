<template>
  <div>Hello Home Page</div>
</template>

<script lang="ts">
export default {
  setup() {
    definePageMeta({
      layout: 'auth',
      middleware: 'auth'
    })

    return {};
  },
};
</script>