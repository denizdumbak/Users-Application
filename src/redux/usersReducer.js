import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersEndpoint = "http://192.168.1.38:3000/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await axios.get(usersEndpoint);
    return res.data;
})

export const addUser = createAsyncThunk("users/addUsers", async (newUser) => {
    const res = await axios.post(usersEndpoint, newUser);
    return res.data;
})

export const deleteUser = createAsyncThunk("users/deleteUsers", async (id) => {
    await axios.delete(`${usersEndpoint}/${id}`);
    return id;
})

export const updateUser = createAsyncThunk("users/updateUser", async (data) => {
    const res = await axios.patch(`${usersEndpoint}/${data.id}`, data);
    return res.data;
});


const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.data = state.data.filter(user => user.id !== action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const existingUserIndex = state.data.findIndex(user => user.id === updatedUser.id);

                if (existingUserIndex !== -1) {
                    state.data[existingUserIndex] = updatedUser;
                } else {
                    console.error('User not found in state:', updatedUser);
                }
            });
    }
});

export default usersSlice.reducer;