<template>
  <Layout>
    <h1>Hospitales</h1>
    <div class="flex justify-end py-3 pl-2">
      <button @click="handleOpenModalCreate"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Registrar Hospital
      </button>
    </div>
    <HospitalRegistration :isCreate="isCreate" :isModalOpen="isModalOpen" :hospital="hospital" :closeModal="toggleModal"
      :submitFunction="hlandleCreate" />
    <Table :columns='columns' :onClickItem="handleClickItem" :itemsTable="itemsTable" :total="total"
      :currentPage="currentPage" :totalPages="totalPages" :onNext="handleNext" :onPreve="handlePrev" />

  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HospitalRegistration from '~/components/dashboard/HospitalRegistration.vue';
import { useHospitalStore } from '~/store/hospital';

const columns = ["name", "telefono", "horario"];
const counterStore = useHospitalStore();
const isCreate = ref(false)

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
const totalPages = computed(() => counterStore?.response?.totalPages || 0);
const total = computed(() => counterStore?.response?.total || 0);
const currentPage = computed(() => counterStore?.response?.currentPage || 0);
const isModalOpen = computed(() => counterStore?.isModalOpen);


const handleClickItem = (values: any) => {
  const [long, lat] = values?.location?.coordinates || [];
  hospital.value.name = values.name || '';
  hospital.value.direccion = values.direccion || '';
  hospital.value.telefono = values.telefono || '';
  hospital.value.horario = values.horario || '';
  hospital.value.urlGoogleMaps = values.urlGoogleMaps || '';
  hospital.value.long = long || '0';
  hospital.value.lat = lat || '0';
  counterStore.toggleModal(true);
};

const handleOpenModalCreate = () => {
  isCreate.value = true;
  counterStore.toggleModal(true);
}

const hlandleCreate = async (params: any) => {
  await counterStore.createHospital(params);
};

const handleGetAllhospitals = async () => {
  await counterStore.getAllhospitals();
};

const handleNext = async () => {
  await counterStore.getAllhospitals({ page: currentPage.value + 1 });
};
const handlePrev = async () => {
  await counterStore.getAllhospitals({ page: currentPage.value - 1 });
}

onMounted(() => {
  handleGetAllhospitals();
});

const toggleModal = (v: boolean = false) => {
  if (!v) {
    isCreate.value = false;
  }
  counterStore.toggleModal(v);
};

definePageMeta({
  middleware: 'auth'
});
</script>
