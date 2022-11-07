import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RouteName from "../../CustomRoutes/RouteName";
import AuthService from "../../services/AuthService";
export const register = createAsyncThunk(
    "user/create",
    async ({ payload, navigate, toast }, { rejectWithValue }) => {
        try{
            const response = await AuthService.register(payload);
            if(response.data.status===true){
                navigate(RouteName.USER);
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
                return response.data.data;
            }else{
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
                return rejectWithValue(response.data.message);
            }
        }catch(error){
            if(error.response){
                return rejectWithValue(error.response.data.message);
            }else{
                return rejectWithValue("Something went wrong");
            }
        }
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
    initialState: {
        loading: false,
        user: {},
        users: [],
        todo: [],
        error: ""
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
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = [action.payload];
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// https://www.bezkoder.com/redux-toolkit-crud-react-hooks/
//https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98
const { reducer } = authSlice;
export default reducer;