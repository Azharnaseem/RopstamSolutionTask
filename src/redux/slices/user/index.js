import userSlice from "./slice";
export const userSliceReducer = userSlice.reducer;
export const {
  setIsLoggedIn,
  setUserMeta,
  setToken,
  setVehicelsData,
  deleteCard,
} = userSlice.actions;
export const selectToken = (state) => state.user.token;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserMeta = (state) => state.user.userMeta;
export const dataVehicle = (state) => state.user.vehiclesData;
