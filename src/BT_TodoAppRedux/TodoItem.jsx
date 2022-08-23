import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
// import { deleteTodo, toggleTodo } from "../actions/todoActions";
import { deleteTodo, toggleTodo } from "../slices/todoSlice";



const TodoItem = ({ todo }) => {
   const dispatch = useDispatch();

   const handleDelete = (evt) => {
      evt.stopPropagation();
      dispatch(deleteTodo(todo.id));
   };

   const handleToggle = () => {
      dispatch(toggleTodo(todo));
   };

   return (
      <div
         className={cn("card mb-3 bg-white", {
            "opacity-75": todo.isDone,
         })}
         onClick={handleToggle}
      >
         <div className="card-body d-flex justify-content-between">
            <h3
               className={cn({
                  "text-decoration-line-through text-secondary": todo.isDone,
               })}
            >
               {todo.title}
            </h3>
            <div>
               <button className="btn btn-danger" onClick={handleDelete}>
                  X
               </button>
            </div>
         </div>
      </div>
   );
};

export default TodoItem;
