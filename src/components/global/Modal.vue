<template>
  <div v-if="isModalOpen" class="fixed inset-0 z-10 bg-black bg-opacity-50">
    <div class="fixed inset-0 z-20 flex items-center justify-center">
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isModalOpen: Boolean,
  },
};
</script>
