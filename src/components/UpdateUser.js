import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/usersReducer';

export default function UpdateUser({ route }) {
  const { user } = route.params;
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    },
    phone: ''
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setUserInfo({
        id: user.id || '',
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        address: {
          street: user.address?.street || '',
          suite: user.address?.suite || '',
          city: user.address?.city || '',
          zipcode: user.address?.zipcode || '',
        },
        phone: user.phone || ''
      });
    }
  }, [user]);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userInfo.name}
        onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userInfo.username}
        onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userInfo.email}
        onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={userInfo.address.street}
        onChangeText={(text) => setUserInfo({ ...userInfo, address: { ...userInfo.address, street: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="Suite"
        value={userInfo.address.suite}
        onChangeText={(text) => setUserInfo({ ...userInfo, address: { ...userInfo.address, suite: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={userInfo.address.city}
        onChangeText={(text) => setUserInfo({ ...userInfo, address: { ...userInfo.address, city: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="Zipcode"
        value={userInfo.address.zipcode}
        onChangeText={(text) => setUserInfo({ ...userInfo, address: { ...userInfo.address, zipcode: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={userInfo.phone}
        onChangeText={(text) => setUserInfo({ ...userInfo, phone: text })}
      />

      <Button title="Save Changes" onPress={() => dispatch(updateUser(userInfo))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});
