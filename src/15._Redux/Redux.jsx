import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseByAmount } from "../slices/countSlice";

const Redux = () => {
   // Để truy cập vào giá trị state của redux store ta dùng hook useSelector
   // useSelector nhận vào 1 callback có tham số state là giá trị hiện tại của store, giá trị mà ta return bên trong callback chính là giá trị trả về của hook useSelector
   // useSelector sẽ theo dõi và tự động gọi lại callback nếu giá trị state của store thay đổi
   const { count, colors } = useSelector((state) => {
      return { count: state.count, colors: state.colors };
   });

   //useDispatch trả về dispatch function của redux store
   //dispatch function dùng để gửi các action lên store để cập nhật state
   const dispatch = useDispatch();

   const handleIncrease = () => {
      // Làm sao để tăng state count lên +1
      // dispatch({ type: "increase" });

      //dispatch slice action
      dispatch(increase());
   };

   const handleIncreaseByAmount = () => {
      const value = +prompt("input amount");
      // dispatch({ type: "increaseByAmount", amount: value });

      dispatch(increaseByAmount(value));
   };

   const handleDecrease = () => {
      // Làm sao để giảm state count xuống -1
      // dispatch({ type: "decrease" });
      dispatch(decrease());
   };

   const handleAddColor = () => {
      const color = prompt("input color");
      dispatch({ type: "ADDCOLOR", color });
   };

   const handleRemoveColor = () => {
      const color = prompt("input color");
      dispatch({ type: "REMOVECOLOR", color });
   };

   return (
      <div>
         <h1>Redux</h1>

         <p>Count: {count}</p>
         <button onClick={handleIncrease}>Increase</button>
         <button onClick={handleIncreaseByAmount}>Increase By Amount</button>
         <button onClick={handleDecrease}>Decrease</button>

         <br />
         <br />

         <p>Colors: {colors.join()}</p>
         <button onClick={handleAddColor}>Add color</button>
         <button onClick={handleRemoveColor}>Remove color</button>
      </div>
   );
};

export default Redux;
