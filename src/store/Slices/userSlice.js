import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RouteName from "../../CustomRoutes/RouteName";
import UserService from "../../services/UserService";

export const getAllUsers = createAsyncThunk(
  "user/users",
  async ({ }, { rejectWithValue }) => {
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

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await UserService.getUserById(id);
      if (response.data.status === true) {
        return response.data.data;
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
    try {
      const response = await UserService.remove(id);
      if (response.data.status === true) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        })
        return id;
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        })
        return rejectWithValue(response.data.message);
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


export const userUpdate = createAsyncThunk(
  "user/userUpdate",
  async ({ payload, id, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await UserService.userUpdate(id, payload);
      if (response.data.status === true) {
        navigate(RouteName.USER);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        })
        return response.data.data;
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        })
        return rejectWithValue(response.data.message);
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
    user: {
      name: "",
      email: "",
      password: "",
      role: "",
      phone: ""
    },
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
    [getUserById.pending]: (state, action) => {
      state.loading = true
    },
    [getUserById.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false
    },
    [getUserById.rejected]: (state, action) => {
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
    [userUpdate.pending]: (state, action) => {
      state.loading = true;
    },
    [userUpdate.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [userUpdate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const { reducer } = userSlice;
export default reducer;