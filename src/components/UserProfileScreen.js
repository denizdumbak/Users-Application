// screens/UserProfile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserProfile({ route }) {
  const { user } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {user.name}</Text>
      <Text style={styles.label}>Username: {user.username}</Text>
      <Text style={styles.label}>Email: {user.email}</Text>
      <Text style={styles.label}>Street: {user.address.street}</Text>
      <Text style={styles.label}>Suite: {user.address.suite}</Text>
      <Text style={styles.label}>City: {user.address.city}</Text>
      <Text style={styles.label}>Zipcode: {user.address.zipcode}</Text>
      <Text style={styles.label}>Phone: {user.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});
