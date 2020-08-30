import * as SecureStore from 'expo-secure-store';

export const setCookie = (key: string, value: string, option?: any) => {
  SecureStore.setItemAsync(key, value, option);
};

export const setAccessToken = (value: string) => {
  setCookie('token', value);
};
export const getAccessToken = async (): Promise<string | null> => {
  const cookie = await SecureStore.getItemAsync('token');
  return cookie;
};
