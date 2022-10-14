import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

export const register = createAsyncThunk(
    "user/create",
    async (payload) => {
        const res = await AuthService.register(payload);
        return res.data;
    }
);

export const login = createAsyncThunk(
    "user/login",
    async (payload) => {
        const res = await AuthService.login(payload);
        return res.data;
    }
);

export const getAllTodo = createAsyncThunk(
    "auth/todo",
    async () => {
        const res = await AuthService.getAll();
        return res.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState:{
        loading: false,
        user:[],
        todo:[],
        error:""
    },
    
    extraReducers: {
        [getAllTodo.pending]: (state, action) => {
            state.loading = true
        },
        [getAllTodo.fulfilled]: (state, action) => {
            state.todo = action.payload;
            state.loading = false
        },
        [getAllTodo.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

// https://www.bezkoder.com/redux-toolkit-crud-react-hooks/
const { reducer } = authSlice;
export default reducer;