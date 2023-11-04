<template>
  <div class="mt-4">
    <label :for="id" class="block text-gray-700">{{ label }}</label>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder" class="w-full border border-gray-300 rounded p-2" />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String,
  label: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<script>
export default {
  name: "InputLabel",
};
</script>
