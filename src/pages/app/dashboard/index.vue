<template>
  <Layout>
    <h1>Hospitales</h1>
    <div class="flex justify-end py-3 pl-2">
      <button @click="openModal(true)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Registrar Hospital
      </button>
    </div>
    <HospitalRegistration :isModalOpen="isModalOpen" :hospital="hospital" :closeModal="openModal"
      :onClickRegister="hlandleCreate" :submitFunction="hlandleCreate" />
    <Table :columns='["name", "telefono", "horario"]' :onClickItem="handleClickItem" :itemsTable="itemsTable"
      :itemsPerPage="10" />

  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HospitalRegistration from '~/components/dashboard/HospitalRegistration.vue';
import { useHospitalStore } from '~/store/hospital';

const counterStore = useHospitalStore();
const isModalOpen = ref(false);
const hospital = ref({
  name: '',
  direccion: '',
  telefono: '',
  horario: '',
  urlGoogleMaps: '',
  long: '',
  lat: ''
});

const itemsTable = computed(() => counterStore?.response?.itemsTable || []);

const hlandleCreate = async (params: any) => {
  console.log("🚀 ~ file: index.vue:30 ~ login ~ params:", params)
};

const handleClickItem = (values: any) => {
  const [long, lat] = values?.location?.coordinates || [];
  hospital.value.name = values.name || '';
  hospital.value.direccion = values.direccion || '';
  hospital.value.telefono = values.telefono || '';
  hospital.value.horario = values.horario || '';
  hospital.value.urlGoogleMaps = values.urlGoogleMaps || '';
  hospital.value.long = long || '0';
  hospital.value.lat = lat || '0';
  isModalOpen.value = true;
};

const handleGetAllhospitals = async () => {
  await counterStore.getAllhospitals();
};

onMounted(() => {
  handleGetAllhospitals();
});

const openModal = (v: boolean = false) => {
  isModalOpen.value = v;
};

definePageMeta({
  middleware: 'auth'
});
</script>
