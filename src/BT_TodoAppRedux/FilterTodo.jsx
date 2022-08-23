import React from "react";
import { useDispatch } from "react-redux";
// import { changeFilter } from "../actions/todoActions";
import { changeFilter } from "../slices/todoSlice";


const FilterTodo = () => {
   const dispatch = useDispatch();
   const handleFilter = (filter) => {
      dispatch(changeFilter(filter));
   };

   return (
      <div className="btn-group ms-4" role="group">
         <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleFilter("all")}
         >
            All
         </button>
         <button
            type="button"
            className="btn btn-success"
            onClick={() => handleFilter("active")}
         >
            Active
         </button>
         <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleFilter("done")}
         >
            Done
         </button>
      </div>
   );
};

export default FilterTodo;
