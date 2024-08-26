import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/components/UserList';
import UpdateUser from './src/components/UpdateUser';
import UserProfile from './src/components/UserProfileScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AddUser from './src/components/AddUser';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} options={{ title: 'Users' }} />
        <Stack.Screen name="AddUser" component={AddUser} options={{ title: 'Add User' }} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} options={{ title: 'Update User' }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'User Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
