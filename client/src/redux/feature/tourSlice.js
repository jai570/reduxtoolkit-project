import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";

const initialState = {
  tour: {},
  tours: [],
  userTours: [],
  error: "",
  loading: false,
};

export const createTour = createAsyncThunk(
  "tour/createTour",
  async ({ updatedTourData, navigate, toast }, { rejectWithValue }) => {
    try {
      const resp = await api.createTourApi(updatedTourData);
      toast.success("tour cerated successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: {
    [createTour.pending]: (state, action) => {
      state.loading = true;
    },
    [createTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = [action.payload];
    },
    [createTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default tourSlice.reducer;
