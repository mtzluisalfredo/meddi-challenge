import { defineStore } from 'pinia';
import { useAPI } from "../api/useAPI";

interface IUser {
  username: string;
  password: string;
  name?: string
  cellphone?: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: ref<boolean>(false),
    response: ref<any>({}),
    errors: ref<object>({}),
  }),
  actions: {
    async logUserIn({ username, password }: IUser) {
      this.loading = true;
      const { request } = useAPI();

      const { response } = await request.post('/user/login', {
        username,
        password
      })

      if (response?.jwtToken) {
        const token = useCookie('token');
        token.value = response?.jwtToken;
        this.authenticated = true;
        navigateTo('/app/dashboard')
      }
      this.loading = false;
    },
    async userRegister({ username, password, name, cellphone }: IUser) {
      this.loading = true;
      const { request } = useAPI();

      const { response } = await request.post('/user/create', {
        username,
        password,
        name,
        cellphone
      })

      if (response?.user) {
        this.logUserIn({ username, password })
      }
      this.loading = false;
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null;
      navigateTo('/auth/login');
    },
  },
});