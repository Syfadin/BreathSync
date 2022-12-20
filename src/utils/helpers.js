import { Alert } from 'react-native';

export const showError = (error) => {
  Alert.alert(
    'Error',
    error.message,
    [{ text: 'OK', onPress: () => {} }],
    { cancelable: false }
  );
};

export const showInfo = (message) => {
  Alert.alert(
    'Info',
    message,
    [{ text: 'OK', onPress: () => {} }],
    { cancelable: false }
  );
};

export const confirmAction = (message, onConfirm) => {
  Alert.alert(
    'Confirm',
    message,
    [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      { text: 'OK', onPress: onConfirm },
    ],
    { cancelable: false }
  );
};
