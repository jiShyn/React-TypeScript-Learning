import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
   const { products } = useSelector((state) => state.cart_Recode);
   const dispatch = useDispatch();

   const handleSelect = (product) => {
      dispatch({ type: "selectProduct", product });
   };

   const handleAddToCart = (product) => {
      dispatch({ type: "addToCart", product });
   };
   
   return (
      <div className="row">
         {products.map((product) => {
            return (
               <div key={product.id} className="col-sm-4">
                  <div className="card">
                     <img
                        src={product.image}
                        alt={product.name}
                        width="100%"
                        height="300px"
                     />
                     <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <button
                           className="btn btn-dark"
                           onClick={() => handleSelect(product)}
                        >
                           Details
                        </button>

                        <button
                           className="btn btn-success"
                           onClick={() => handleAddToCart(product)}
                        >
                           Add to Cart
                        </button>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default ProductList;
