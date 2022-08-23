import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
   const { todos, isLoading, error } = useSelector((state) => state.todo);

   if (isLoading) return <h1>Loading...</h1>;

   if (error) return <h1>{error}</h1>;
   return (
      <div>
         {/* {isLoading && <Loading/>} */}
         {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
         })}
      </div>
   );
};

export default TodoList;
