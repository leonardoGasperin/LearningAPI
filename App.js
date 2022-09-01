import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';

import { LearningAPI } from './src/screens/projectAPI/LearningAPI/LearningAPI';
import { AddTask } from './src/screens/projectAPI/AddTask/AddTask';
import { MemesList } from './src/screens/Trello/MemesList/MemesList';
import { MemesDetails } from './src/screens/Trello/MemesDetails/MemesDetails';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabAPI() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='LearningAPI' component={LearningAPI}/>
      <Drawer.Screen name='MemesList' component={MemesList}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MemesList'>
        <Stack.Screen name='API' component={LearningAPI}/>
        <Stack.Screen name='AddTask' component={AddTask}/>

        <Stack.Screen name='MemesList' component={MemesList}/>
        <Drawer.Screen name='MemesDetails' component={MemesDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
