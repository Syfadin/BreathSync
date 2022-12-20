import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

export default Routes;
