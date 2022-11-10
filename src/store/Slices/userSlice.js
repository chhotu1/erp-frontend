import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

export const getAllUsers = createAsyncThunk(
  "user/users",
  async ({},{ rejectWithValue }) => {
    try {
      const response = await UserService.getAllUsers();
      if (response.data.status === true) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async ({ id, toast }, { rejectWithValue }) => {
      try{
          const response = await UserService.remove(id);
          if(response.data.status===true){
              toast.success(response.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "colored",
              })
              return id;
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    users: [],
    error: ""
  },

  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.loading = true
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deleteUser.pending]: (state, action) => {
      state.loading = true
    },
    [deleteUser.fulfilled]: (state, action) => {
      let index = state.users.data.findIndex(({ _id }) => _id === action.payload);
      state.users.data.splice(index, 1);
      state.loading = false
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
const { reducer } = userSlice;
export default reducer;