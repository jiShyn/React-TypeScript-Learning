// rafce
import React from "react";

const Callback = ({ onClick }) => {
	const handleClick = () => {
		//gọi tới props onClick và truyền kèm data
		onClick("Hai");
	}
   return (
      <div>
         <button className="btn btn-dark" onClick={handleClick}>
            Click me
         </button>
      </div>
   );
};

export default Callback;
