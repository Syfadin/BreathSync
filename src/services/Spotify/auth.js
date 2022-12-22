import * as SecureStore from 'expo-secure-store';
import { authenticate as authenticateApi } from './api';

const SPOTIFY_ACCESS_TOKEN_KEY = 'BQAwFsY2IgpLYxK2m8n653KubWTXWFqDIE05dW6lhdy_VLGoIWzlk_m-QRiyJF3CX9LYQ6boum2o3hqxcBE17daDZpiE06wiuu25aW4wdq0MRmxjLLsmm2zBWYrAlku84Y_K7ucp-IctR5uOum17f7qa3SZur6faAd_2rz5k-Lw3';
const SPOTIFY_CLIENT_ID_KEY = 'f7a7382a8e3046a4bf4121d0c5d20d74';
const SPOTIFY_CLIENT_SECRET_KEY = '9f3896e5b86c4956aeb76e5d6fbac981';

export const authenticate = async () => {
  const clientId = await SecureStore.getItemAsync(SPOTIFY_CLIENT_ID_KEY);
  const clientSecret = await SecureStore.getItemAsync(SPOTIFY_CLIENT_SECRET_KEY);
  if (!clientId || !clientSecret) {
    throw new Error('Spotify client ID and secret are not set');
  }
  const accessToken = await authenticateApi(clientId, clientSecret);
  await SecureStore.setItemAsync(SPOTIFY_ACCESS_TOKEN_KEY, accessToken);
  return accessToken;
};

export const getAccessToken = async () => {
  const accessToken = await SecureStore.getItemAsync(SPOTIFY_ACCESS_TOKEN_KEY);
  if (!accessToken) {
    throw new Error('Spotify access token is not set');
  }
  return accessToken;
};

export const setClientId = async (clientId) => {
  await SecureStore.setItemAsync(SPOTIFY_CLIENT_ID_KEY, clientId);
};

export const setClientSecret = async (clientSecret) => {
  await SecureStore.setItemAsync(SPOTIFY_CLIENT_SECRET_KEY, clientSecret);
};

export const clearAuthData = async () => {
  await SecureStore.deleteItemAsync(SPOTIFY_ACCESS_TOKEN_KEY);
  await SecureStore.deleteItemAsync(SPOTIFY_CLIENT_ID_KEY);
  await SecureStore.deleteItemAsync(SPOTIFY_CLIENT_SECRET_KEY);
};
