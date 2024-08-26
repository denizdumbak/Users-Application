import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/usersReducer';

export default function AddUser({navigation}) {
    const users = useSelector((state) => state.users.data);

    const [userInfo, setUserInfo] = useState({
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

    const generateId = (users) => {
        const maxId = users.reduce((max, user) => Math.max(max, parseInt(user.id)), 0);
        return (maxId + 1).toString();
    };

    const handleAddUser = () => {
        const newUser = {
            ...userInfo,
            id: generateId(users)
        };
        dispatch(addUser(newUser));
        navigation.goBack();
    };

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

            <Button title="Add" onPress={() => handleAddUser(userInfo)} />
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
