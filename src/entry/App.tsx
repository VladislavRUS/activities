import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../constants/Routes';
import { Home } from '../views/Home';
import { Feed } from '../views/Feed';

const Stack = createStackNavigator();

const screenOptions = {
  cardStyle: { backgroundColor: '#fff' },
};

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.HOME} screenOptions={screenOptions}>
          <Stack.Screen name={Routes.HOME} component={Home} options={{ title: 'Просмотр' }} />
          <Stack.Screen name={Routes.FEED} component={Feed} options={{ title: 'Лента' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
