import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoggedIn: false,
  userMeta: null,
  vehiclesData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserMeta: (state, action) => {
      state.userMeta = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setVehicelsData: (state, action) => {
      let temp = [...state.vehiclesData];
      console.log("=======ww==innnnnn===========================");
      console.log(action.payload);
      console.log("====================================");
      temp.push(action.payload);
      state.vehiclesData = temp;
    },
    deleteCard: (state, action) => {
      let temp = [...state.vehiclesData];
      temp.splice(action.payload, 1);
      state.vehiclesData = temp;
    },
  },
});

export default userSlice;
