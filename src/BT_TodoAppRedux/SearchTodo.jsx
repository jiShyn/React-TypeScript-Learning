import React from "react";
import { useDispatch } from "react-redux";
// import { changeSearch } from "../actions/todoActions";
import { changeSearch } from "../slices/todoSlice";


const SearchTodo = () => {
   const dispatch = useDispatch();
   const handleSearch = (evt) => {
      if (evt.key !== "Enter") return;

      const { value } = evt.target;
      dispatch(changeSearch(value));
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
