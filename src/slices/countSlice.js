import { createSlice } from "@reduxjs/toolkit";

//createSlice là hàm giúp tạo nhanh reducer, actions, constants của redux vào chung 1 chỗ

const countSlice = createSlice({
   name: "count", //namespace, dùng để định danh cho slice
   initialState: 0, //giá tị khởi tạo của state
   reducers: {
      increase: (state, action) => {
         return state + 1;
      },
      decrease: (state) => {
         return state - 1;
      },
      increaseByAmount: (state, action) => {
         return state + action.payload;
      },
   },
});

//export actions
export const { increase, decrease, increaseByAmount } = countSlice.actions;

//export default reducer
export default countSlice.reducer;
