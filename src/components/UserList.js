// screens/UserList.js
import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from '../redux/usersReducer';

export default function UserList({ navigation }) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (status === "loading") {
        return <Text>Loading...</Text>
    }
    if (status === "failed") {
        return <Text>Error: {error}</Text>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('UserProfile', { user: item })}
                    >
                        <Text style={styles.userName}>{item.name}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Update" onPress={() => navigation.navigate('UpdateUser', { user: item })} />
                            <Button title="Delete" color="red" onPress={() => dispatch(deleteUser(item.id))} />
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Button
                title="Add User"
                onPress={() => navigation.navigate('AddUser')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
