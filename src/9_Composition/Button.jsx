import React from "react";
import cn from "classnames";

//children là 1 props mặc định của react, nó đại diện cho nội dung nằm giữa 2 thẻ đóng/mở của component

//Dùng thư viện classnames để nối các class lai với nhau (có thể kết hợp thêm class theo điều kiện)
// const classes = cn(`btn btn-${varian}`, className, {
//    foo: 1 === 1,
//    bar: 4 < 2,
// });

const Button = ({
   varian,
   children,
   className = "",
   disabled = false,
   loadding = false,
}) => {
   const classes = cn(`btn btn-${varian}`, className);
   return (
      <button className={classes} disabled={disabled || loadding}>
         {children}
         {loadding && (
            <div class="spinner-border text-primary spinner-border-sm ms-2" role="status">
               <span class="visually-hidden">Loading...</span>
            </div>
         )}
      </button>
   );
};

export default Button;
