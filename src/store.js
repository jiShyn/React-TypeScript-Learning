// File dùng để cấu hình redux
import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./reducers/colorReducer";
// import countReducer from "./reducers/countReducer";
import cartReducer from "./reducers/cartReducer";
// import todoReducer from "./reducers/todoReducer";
import cartReducer_Recode from "./reducers/cartReducer_Recode";
import todoReducer_Recode from "./reducers/todoReducer_Recode";

import countReducer from "./slices/countSlice";
import todoReducer from "./slices/todoSlice";

//Tạo ra redux để lưu trữ state
const store = configureStore({
   reducer: {
      // Khai báo state là 1 reducer, là 1 function nhận vào 2 tham số:
      // Tham số thứ 1: giá trị hiện tại của state
      // Tham số thứ 2: action, ta sẽ dùng action.type để kiểm tra và thay đổi state
      count: countReducer,

      colors: colorReducer,

      cart: cartReducer,

      // cart_Recode: cartReducer_Recode,

      todo: todoReducer,

      // todo_Recode: todoReducer_Recode,
   },
});

// ========================================================

// console.log(store);

// // store.getState(): là hàm để truy cập vào state của redux store
// console.log("Default State: ", store.getState());

// // store.subscribe(): là hàm dùng để lắng nghe sự thay đổi của state trong redux store, khi store thay đổi, callback bên trong hàm subcribe sẽ đc gọi tới
// store.subscribe(() => console.log("State change: ", store.getState()))

// //ko đc quyền thya đổi trực tiếp state
// // store.getState().count = 20;

// // Thay đổi state của redux store ta cần thong qua 1 action
// //action bản chất là 1 obj có 1 thuộc tính bắt buộc là type, dùng để mô tả cho redux store biết sẽ thay đổi state như thế nào
// store.dispatch({ type: "increase" })
// store.dispatch({ type: "increaseByAmount", amount: 10 }) //state count +10

// =========================================================

export default store;
