import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const nameToPage = to?.name?.toString() ?? '';

  const token = useCookie('token');

  if (token.value) {
    // todo verify if token is valid, before updating the state
    authenticated.value = true; // update the state to authenticated
  }
  const isToDashboard = token?.value && (['index', 'login'].includes(nameToPage) || nameToPage.indexOf('auth-') > -1);

  if (isToDashboard) {
    return navigateTo('/app/dashboard');
  }

  const isToLogin = !token?.value && (['index', 'login'].includes(nameToPage) || nameToPage.indexOf('app-') > -1);

  if (isToLogin) {
    abortNavigation();
    return navigateTo('/auth/login');
  }
});
