// In App.js in a new project

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default Routes;
