import { useHttp } from "./useHttp";
import { useQueryToUrl } from "./useQueryToUrl";

interface IGenerateUri {
  query?: string | object;
  endpoint: string | undefined;
  body?: any
}

export const useAPI = () => {

  let response: any = {};
  let errors: any = {};
  let loading: any = true;
  let status: any = false

  const config = useRuntimeConfig();

  const url = `${config?.public.baseURL}`;

  function generateApiUrl({ query, endpoint }: IGenerateUri, token?: string) {
    endpoint = typeof query === "string" ? query : endpoint;
    const tempURL = endpoint ? `${url}${endpoint}` : url;

    let urlParam = "";

    if (query && typeof query === "object") {
      urlParam = `?${useQueryToUrl(query)}`;
    }

    const apiendpoint = `${tempURL}${(query === undefined && query !== null) || Object.keys(query).length === 0
      ? ""
      : urlParam
      }`;

    // Agregar el token Bearer a la URL si está presente
    if (token) {
      return `${apiendpoint}?access_token=${token}`;
    }

    return apiendpoint;
  }

  const get = async (endpoint?: string, query?: { [x: string]: any }) => {
    loading = true;
    const res = await useHttp(generateApiUrl({ query, endpoint }), {
      method: "get",
    });

    status = res.success;

    if (res.success) {
      response = res.data.data;
    } else {
      errors = res.data;
    }

    loading = false;

    return { errors, loading, status, response };
  };

  const post = async (endpoint?: string, body?: { [x: string]: any }) => {
    const res = await useHttp(`${generateApiUrl({ body, endpoint })}`, {
      method: "post",
      body,
    });

    status = res.success;

    if (res.success) {
      response = res.data.data;
    } else {
      errors = res.data;
    }
    loading = false;

    return { errors, loading, status, response };
  };


  const request = { get, post }

  return { request };
};