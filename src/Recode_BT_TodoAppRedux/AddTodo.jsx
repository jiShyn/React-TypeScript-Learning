import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/recode_todoAction.js";

const AddTodo = () => {
   const dispatch = useDispatch();

   const handleKeyDown = (evt) => {
      if (evt.key !== "Enter") return;

      const { value } = evt.target;
      dispatch(
         addTodo(value, () => {
            evt.target.value = "";
         })
      );
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
