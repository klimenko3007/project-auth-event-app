import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  errors: null,
};

const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
		setErrors: (store, action) => {
      store.errors = action.payload;
    },
  },
});
export default ui;