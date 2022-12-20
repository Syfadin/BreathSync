import { AsyncStorage } from 'react-native';

const KEY_TIMER = '@TummoTimer';

export const getTimer = async () => {
  const timer = await AsyncStorage.getItem(KEY_TIMER);
  return timer ? JSON.parse(timer) : {};
};

export const setTimer = async (timer) => {
  await AsyncStorage.setItem(KEY_TIMER, JSON.stringify(timer));
};

export const clearTimer = async () => {
  await AsyncStorage.removeItem(KEY_TIMER);
};
