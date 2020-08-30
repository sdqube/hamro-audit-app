import { HOST_API } from 'react-native-dotenv';

import store from '../store';

interface optionProps {
  signal?: AbortSignal;
  noContentType?: boolean;
  contentType?: string;
}

interface apiRequestProps {
  url: string;
  method: string;
  data?: any;
  options?: optionProps;
}

const apiRequest = async ({
  url,
  method,
  data,
  options,
}: apiRequestProps): Promise<any> => {
  let body = data;
  let headers: any = {
    'accept-language': 'es',
    Accept: 'application/json',
    authorization: store.auth.accessToken,
  };
  if (!options?.noContentType) {
    headers['Content-Type'] = options?.contentType || 'application/json';
    body = JSON.stringify(data);
  }
  const response = await fetch(`${HOST_API}${url}`, {
    method, // *GET, POST, PUT, DELETE, etc.
    headers,
    signal: options?.signal,
    body, // body data type must match "Content-Type" header
  });

  const result = await response.json();
  if (result.error) {
    const error = result.msg ? { message: result.msg } : result.error;
    throw error;
  }
  return result;
};

export const post = (
  url: string,
  data: any,
  options?: optionProps
): Promise<any> => {
  return apiRequest({ url, method: 'POST', data, options });
};

export const get = (url: string, options?: optionProps): Promise<any> => {
  return apiRequest({ url, method: 'GET', options });
};

export const put = (
  url: string,
  data: any,
  options?: optionProps
): Promise<any> => {
  return apiRequest({ url, method: 'PUT', data, options });
};

export const patch = (
  url: string,
  data: any,
  options?: optionProps
): Promise<any> => {
  return apiRequest({ url, method: 'PATCH', data, options });
};

export const remove = (
  url: string,
  data: any,
  options?: optionProps
): Promise<any> => {
  return apiRequest({ url, method: 'DELETE', data, options });
};
