// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// axios
import axios from "axios";

const API_KEY = "cb90bc1c552e454d8b3175732230407";
const COUNTRY_CODE = "tr";

export const fetchForecast = createAsyncThunk(
  "forecast/getforecast",
  async (city) => {
    const res = await axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city.lat},${city.lon}&days=7&aqi=no&alerts=no&lang=${COUNTRY_CODE}`
    );
    return res.data;
  }
);

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    data: {},
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchForecast.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchForecast.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    [fetchForecast.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default forecastSlice.reducer;
