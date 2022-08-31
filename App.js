import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';

import { LearningAPI } from './src/screens/projectAPI/LearningAPI/LearningAPI';
import { AddTask } from './src/screens/projectAPI/AddTask/AddTask';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabAPI() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='LearningAPI' component={LearningAPI}/>
      <Drawer.Screen name='AddTask' component={AddTask}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='API'>
        <Stack.Screen name='API' component={LearningAPI}/>
      <Stack.Screen name='AddTask' component={AddTask}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
