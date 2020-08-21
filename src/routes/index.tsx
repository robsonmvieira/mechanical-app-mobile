// In App.js in a new project

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Cadastrar">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Routes;
