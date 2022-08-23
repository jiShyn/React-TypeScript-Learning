import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
   const { todos, isLoading, error } = useSelector(
      (state) => state.todo_Recode
   );

   if (isLoading) return <h1>Loading...</h1>;

   if (error) return <h1>{error}</h1>;

   return (
      <div>
         {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
         })}
      </div>
   );
};

export default TodoList;
