import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../constants/Routes';
import { Home } from '../views/Home';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Routes.HOME} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
