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
      console.log(action,'----------------------------------------')
      state.error = 'action.payload.message';
    },
  },
});
const { reducer } = userSlice;
export default reducer;