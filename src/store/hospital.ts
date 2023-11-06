import { useAPI } from "../api/useAPI";


export interface IHospital {
  name: string;
  direccion: string;
  telefono: string;
  horario: string;
  urlGoogleMaps: string;
  long: string;
  lat: string;
}
export interface IHospitalResponse {
  currentPage: number;
  itemsTable: { [x: string]: any }[];
  total: number;
  totalPages: number
}

export const useHospitalStore = defineStore("hospital", {
  state: () => ({
    loading: ref<boolean>(false),
    response: ref<any>({}),
    errors: ref<object>({}),
  }),
  actions: {
    async getAllhospitals({ page = 1, rowsPerPage = 10 } = {}) {
      this.loading = true;
      const { request } = useAPI();

      const { response } = await request.get('/hospital/get/all', { page, rowsPerPage })
      const itemsTable = response.data;

      this.response = { ...response, itemsTable };

      this.loading = false;
    },
    async createHospital(payload: IHospital) {
      this.loading = true;
      const { request } = useAPI();

      const { response } = await request.post('/hospital/create', { ...payload })
      const itemsTable = response.data;

      this.response = { ...response, itemsTable };

      this.loading = false;
    },
  },
});
