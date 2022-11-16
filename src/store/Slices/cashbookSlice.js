import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RouteName from "../../CustomRoutes/RouteName";
import CashbookService from "../../services/CashbookService";

export const create = createAsyncThunk(
  "cashbook/create",
  async ({ payload, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await CashbookService.create(payload);
      if (response.data.status === true) {
        navigate(RouteName.CASHBOOK);
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

export const cashbookUpdate = createAsyncThunk(
  "cashbook/cashbookUpdate",
  async ({ payload,id, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await CashbookService.cashbookUpdate(id,payload);
      if (response.data.status === true) {
        navigate(RouteName.CASHBOOK);
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

export const cashbookList = createAsyncThunk(
  "cashbook/list",
  async ({ }, { rejectWithValue }) => {
    try {
      const response = await CashbookService.list();
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

export const getCashbookById = createAsyncThunk(
  "cashbook/getCashbookById",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await CashbookService.getCashbookById(id);
      if (response.data.status === true) {
        return response.data.data;
      } else {
        return {};
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

export const remove = createAsyncThunk(
  "cashbook/remove",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await CashbookService.remove(id);
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

export const dashboardResults = createAsyncThunk(
  "cashbook/dashboard",
  async ({ }, { rejectWithValue }) => {
    try {
      const response = await CashbookService.dashboardData();
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

export const getCashbookByUserId = createAsyncThunk(
  "cashbook/getCashbookByUserId",
  async ({ user_id}, { rejectWithValue }) => {
    try {
      const response = await CashbookService.getCashbookByUserId(user_id);
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

const cashbookSlice = createSlice({
  name: "cashbook",
  initialState: {
    loading: false,
    create_update_loading: false,
    cashbook: {
      user: "",
      type: "", 
      title: '', 
      amount: "",
      date:""
    },
    cashbooks: [],
    dashboard: [],
    error: ""
  },

  extraReducers: {
    [create.pending]: (state, action) => {
      state.create_update_loading = true;
    },
    [create.fulfilled]: (state, action) => {
      state.create_update_loading = false;
      state.cashbook = action.payload;
    },
    [create.rejected]: (state, action) => {
      state.create_update_loading = false;
      state.error = action.payload;
    },
    [cashbookUpdate.pending]: (state, action) => {
      state.create_update_loading = true;
    },
    [cashbookUpdate.fulfilled]: (state, action) => {
      state.create_update_loading = false;
      state.cashbook = action.payload;
    },
    [cashbookUpdate.rejected]: (state, action) => {
      state.create_update_loading = false;
      state.error = action.payload;
    },
    [cashbookList.pending]: (state, action) => {
      state.loading = true
    },
    [cashbookList.fulfilled]: (state, action) => {
      state.cashbooks = action.payload;
      state.loading = false
    },
    [cashbookList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCashbookByUserId.pending]: (state, action) => {
      state.loading = true
    },
    [getCashbookByUserId.fulfilled]: (state, action) => {
      state.cashbooks = action.payload;
      state.loading = false
    },
    [getCashbookByUserId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCashbookById.pending]: (state, action) => {
      state.loading = true
    },
    [getCashbookById.fulfilled]: (state, action) => {
      state.cashbook = action.payload;
      state.loading = false
    },
    [getCashbookById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [dashboardResults.pending]: (state, action) => {
      state.loading = true
    },
    [dashboardResults.fulfilled]: (state, action) => {
      state.dashboard = action.payload;
      state.loading = false
    },
    [dashboardResults.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [remove.pending]: (state, action) => {
      state.loading = true
    },
    [remove.fulfilled]: (state, action) => {
      let index = state.cashbooks.data.findIndex(({ _id }) => _id === action.payload);
      state.cashbooks.data.splice(index, 1);
      state.loading = false
    },
    [remove.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
const { reducer } = cashbookSlice;
export default reducer;