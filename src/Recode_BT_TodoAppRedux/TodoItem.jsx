import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions/recode_todoAction";

const TodoItem = ({ todo }) => {
   const dispatch = useDispatch();

   const handleDelete = (evt) => {
      evt.stopPropagation();
      dispatch(deleteTodo(todo.id));
   };

   const handleToggle = () => {

      dispatch(toggleTodo(todo))
   };

   return (
      <div className="card mb-3 bg-white">
         <div
            className={cn("card-body d-flex justify-content-between", {
               "opacity-75": todo.isDone,
            })}
            onClick={handleToggle}
         >
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
