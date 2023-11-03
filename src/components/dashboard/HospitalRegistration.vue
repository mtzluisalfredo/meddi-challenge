<template>
  <Modal :isModalOpen="isModalOpen">
    <h3 class="text-2xl font-semibold">Registrar Hospital</h3>
    <form @submit.prevent="submitHospital">

      <InputLabel id="name" v-model:modelValue="formData.name" label="Nombre" />
      <InputLabel id="direccion" v-model:modelValue="formData.direccion" label="Dirección" />
      <InputLabel id="telefono" v-model:modelValue="formData.telefono" label="Teléfono" />
      <InputLabel id="horario" v-model:modelValue="formData.horario" label="Horario" />
      <InputLabel id="urlGoogleMaps" v-model:modelValue="formData.urlGoogleMaps" label="URL de Google Maps" />
      <InputLabel id="long" v-model:modelValue="formData.long" label="Longitud" />
      <InputLabel id="lat" v-model:modelValue="formData.lat" label="Latitud" />
      <div class="mt-4 flex justify-between space-x-4">
        <button type="submit" class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Registrar
        </button>
        <button @click="closeModal"
          class="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
          Cerrar
        </button>
      </div>
    </form>
  </Modal>
</template>

<script lang="ts">
export default {
  props: {
    hospital: {
      type: Object,
      required: true
    },
    isModalOpen: {
      type: Boolean,
      requerired: true
    },
    submitFunction: {
      type: Function,
      required: true
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      question: '',
      formData: {
        name: this.hospital.name,
        direccion: this.hospital.direccion,
        telefono: this.hospital.telefono,
        horario: this.hospital.horario,
        urlGoogleMaps: this.hospital.urlGoogleMaps,
        long: this.hospital.long,
        lat: this.hospital.lat,
      },
    };
  },
  methods: {
    submitHospital() {
      console.log(this.formData)
      // this.submitFunction(this.formData);
    },
    closeModal() {
      this.closeModal(); // Llama a la función closeModal pasada como prop
    },
  },
  onMounted() {
    console.log(this.hospital)
  }
};
</script>