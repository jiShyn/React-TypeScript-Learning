import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getTodos } from "../actions/todoActions";
import { getTodos } from "../slices/todoSlice";


import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
   const dispatch = useDispatch();
   const { filter, search } = useSelector((state) => state.todo);

   // const fetchTodos = async () => {
   //   try {
   //     // Call API
   //     const { data } = await axios.get(
   //       "https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos"
   //     );
   //     // Thành công
   //     dispatch({ type: "getTodos", data });
   //   } catch (error) {
   //     console.log(error);
   //   }
   // };

   useEffect(() => {
      dispatch(getTodos());
   }, [filter, search]);

   return (
      <div style={{ minHeight: "100vh" }} className="bg-secondary">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 mx-auto">
                  <h1 className="text-warning">My Todos</h1>

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
