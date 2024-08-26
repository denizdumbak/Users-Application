import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserProfile({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{user.username}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Street:</Text>
          <Text style={styles.value}>{user.address.street}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Suite:</Text>
          <Text style={styles.value}>{user.address.suite}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{user.address.city}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Zipcode:</Text>
          <Text style={styles.value}>{user.address.zipcode}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
