import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions/recode_todoAction";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
   const dispatch = useDispatch();
   const { filter, search, isLoading } = useSelector(
      (state) => state.todo_Recode
   );


   useEffect(() => {
      dispatch(getTodos());
   }, [filter, search]);

   return (
      <div style={{ minHeight: "100vh" }} className="bg-secondary">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 mx-auto">
                  <div className="text-warning text-center fs-5 mb-5 mt-3">
                     My Todos
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                     <AddTodo />
                     <FilterTodo />
                  </div>

                  <SearchTodo />

                  <TodoList />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TodoApp;
