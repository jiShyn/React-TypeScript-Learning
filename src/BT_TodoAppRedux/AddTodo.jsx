import React from "react";
import { useDispatch } from "react-redux";
// import { addTodo } from "../actions/todoActions";
import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
   const dispatch = useDispatch();

   const handleKeyDown = async (evt) => {
      if (evt.key !== "Enter") return;

      const { value } = evt.target;
      // dispatch action thunk addTodo()
      // dispatch(
      //    addTodo(value, () => {
      // 			//xóa giá trị của input sau khi thêm thành công
      //       evt.target.value = "";
      //    })
      // );

      // khi dispatch 1 action được tạo bởi hàm createAsyncThunk nó sẽ trả về 1 promise => ta có thể dùng then/catch/ hoặc try/catch để chờ action đó xử lý xong và làm 1 việc gì đó bên trong component
      try {
         await dispatch(addTodo(value)).unwrap();
         evt.target.value = "";
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <input
         type="text"
         className="form-control"
         placeholder="Add your todo"
         onKeyDown={handleKeyDown}
      />
   );
};

export default AddTodo;
