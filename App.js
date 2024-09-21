import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './component/screen/Login';
import Building from './component/screen/Building';
import Apartments from './component/screen/Apartments';
import Floor from './component/screen/Floor';
import Home from './component/screen/Home';
import Register from './component/screen/Register';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
              <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
              <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
              <Stack.Screen name='Floor' component={Floor} options={{headerShown: false}}/>                
              <Stack.Screen name='Apartments' component={Apartments} options={{headerShown: false}}/>               
              <Stack.Screen name='Building' component={Building} options={{headerShown: false}}/>
              
            </Stack.Navigator>
        </NavigationContainer>
  );
}


