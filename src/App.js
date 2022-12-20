import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import { Spotify } from './services/Spotify';
import { Tummo } from './services/Tummo';
import { Button, styles as buttonStyles } from './components/Button';
import { Form, styles as formStyles } from './components/Form';
import { Layout, styles as layoutStyles } from './components/Layout';
import { Home, styles as homeStyles } from './screens/Home';
import { Settings, styles as settingsStyles } from './screens/Settings';
import { Timer, styles as timerStyles }


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
