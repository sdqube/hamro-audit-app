import * as SecureStore from 'expo-secure-store';

export const setCookie = (key: string, value: string, option?: any) => {
  SecureStore.setItemAsync(key, value, option);
};

export const deletCookie = (key: string, option?: any) => {
  SecureStore.deleteItemAsync(key, option);
};

export const setAccessToken = (value: string) => {
  setCookie('token', value);
};

export const deleteAccessToken = () => {
  deletCookie('token');
};

export const getAccessToken = async (): Promise<string | null> => {
  const cookie = await SecureStore.getItemAsync('token');
  return cookie;
};
