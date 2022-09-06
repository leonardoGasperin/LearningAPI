import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';

import { LearningAPI } from './src/screens/projectAPI/LearningAPI/LearningAPI';
import { AddTask } from './src/screens/projectAPI/AddTask/AddTask';
import { MemesList } from './src/screens/Trello/MemesList/MemesList';
import { MemesDetails } from './src/screens/Trello/MemesDetails/MemesDetails';
import { BostaRio } from './src/screens/BostaRio/BostaRio';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerAPI() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='LearningAPI' component={LearningAPI}/>
      <Drawer.Screen name='MemesList' component={MemesList}/>
      <Drawer.Screen name='BostaRio' component={BostaRio}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerAPI'>    
        <Stack.Screen name="DrawerAPI" component={DrawerAPI} options={{headerShown: false}}/>
        <Stack.Screen name='AddTask' component={AddTask}/>
        <Stack.Screen name='MemesDetails' component={MemesDetails} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
