<template>
  <div v-if="show" class="flex items-center justify-center">
    <div :style="spinnerStyle" class="border-t-4 border-white rounded-full animate-spin"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    size: String,
  },
  computed: {
    spinnerStyle() {
      return {
        width: this.size || "16px", // Usa el tamaño proporcionado o un valor predeterminado
        height: this.size || "16px", // Usa el tamaño proporcionado o un valor predeterminado
      };
    },
  },
  name: "Spinner",
};
</script>
