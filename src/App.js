import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { Settings } from './screens/Settings';
import { Timer } from './screens/Timer';
import { Spotify } from './screens/Spotify';
import { Tummo } from './screens/Tummo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="Spotify" component={Spotify} />
        <Stack.Screen name="Tummo" component={Tummo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
