<template>
  <div>Meddie</div>
</template>

<script lang="ts">
export default {
  setup() {
    definePageMeta({
      middleware: 'auth'
    })

    return {};
  },
};
</script>