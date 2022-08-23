import React from "react";
import { useDispatch } from "react-redux";
import { searchTodo } from "../actions/recode_todoAction";

const SearchTodo = () => {
   const dispath = useDispatch();
   const handleSearch = (evt) => {
      if (evt.key !== "Enter") return
			dispath(searchTodo())
			
   };

   return (
      <div className="mb-4">
         <input
            type="text"
            className="form-control"
            placeholder="Search your todo"
            onKeyDown={handleSearch}
         />
      </div>
   );
};

export default SearchTodo;
