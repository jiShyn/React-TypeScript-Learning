import React from "react";

const Product = (props) => {
   const { product } = props;
   return (
      <div className="card">
         <div className="card-header">Phone</div>
         <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.price}</p>
         </div>
      </div>
   );
};

export default Product;
