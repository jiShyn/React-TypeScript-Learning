import React from "react";

const ProductList = ({ products, onSelect, onAddToCart }) => {
   const handleSelect = (product) => {
      // console.log(product);
      // Đây là product muốn xem chi tiết => ta cần truyền dữ liệu của product này lên component ShoppingCart

      // B3: Gọi tới prop onSelect và truyền product vào
      onSelect(product);
   };

   const handleAddToCart = (product) => {
      // product: sản phẩm muốn thêm vào giỏ hàng
      // Gọi tới prop onAddToCart và truyền vào param là product để đưa dữ liệu lên component ShoppingCart
      onAddToCart(product);
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
