import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
const initialState = {
  user: null,
  error: "",
  loading: false,
};
export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    console.log(formValue, navigate, toast);
    try {
      const resp = await api.SignIn(formValue);
      toast.success("login Successfull", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      // toast.error()
      // console.log(error.message);
      // console.log(error.resp.data);
      return rejectWithValue(error.resp.data);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const resp = await api.SignUP(formValue);
      toast.success("registered successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/login");
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action) => {
      // console.log(state, action, "state and action");
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...payload }));
      state.user = payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      // state.error = payload;
      console.log(action);
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { setuser, setLogout } = authSlice.actions;
export default authSlice.reducer;
