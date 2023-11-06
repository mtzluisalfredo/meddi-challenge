export const useHttp = async (
  url: string,
  {
    method = "get",
    body = {},
    headers = {},
    fileUpload = false,
  }: {
    method?: string;
    body?: object;
    headers?: HeadersInit;
    fileUpload?: boolean;
  } = { method: "get" }
) => {
  const config = useRuntimeConfig();
  const token = useCookie("token", {
    domain: config.public.session_domain as string | undefined,
  });
  let data = [];
  let error = null;
  let success = false;
  let loading = true;

  const initHeaders = new Headers(headers);
  let params: FormData | string = JSON.stringify(body);

  if (!initHeaders.has("Content-Type")) {
    initHeaders.append("Content-Type", "application/json");
  }
  if (token.value) {
    initHeaders.append("Authorization", `Bearer ${token.value}`);
  }
  if (fileUpload) {
    initHeaders.set("Content-Type", "multipart/form-data");
    const formData = new FormData();
    for (const key of Object.keys(body) as Array<keyof typeof body>) {
      formData.append(key, body[key]);
    }
    params = formData;
  }

  let options = {
    method,
    headers: initHeaders,
    body: method.toUpperCase() === "GET" ? undefined : params,
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const res = await response.json();
      data = res;
      success = true;
    } else {
      if (response.status === 401) {
        const token = useCookie('token');
        token.value = null;
        navigateTo('/auth/login');
      }
      const res = await response.json();
      error = res;
      success = false;
    }
    loading = false;
  } catch (error) {
    success = false;
    loading = false;
  }
  return {
    data,
    error,
    success,
    loading,
  };
};