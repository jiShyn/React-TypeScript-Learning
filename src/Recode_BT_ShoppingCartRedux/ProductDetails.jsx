import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
   const { selectedProduct } = useSelector((state) => state.cart_Recode);
   if (!selectedProduct) return;
   
   return (
      <div className="row mt-5">
         <div className="col-sm-6">
            <img
               src={selectedProduct.image}
               alt={selectedProduct.name}
               width="100%"
               height="500px"
            />
         </div>
         <div className="col-sm-6">
            <h1>Thông số kĩ thuật</h1>
            <table className="table">
               <tbody>
                  <tr>
                     <td>Màn hình</td>
                     <td>{selectedProduct.display}</td>
                  </tr>
                  <tr>
                     <td>Hệ điều hành</td>
                     <td>{selectedProduct.os}</td>
                  </tr>
                  <tr>
                     <td>Camera trước</td>
                     <td>{selectedProduct.frontCamera}</td>
                  </tr>
                  <tr>
                     <td>Camera sau</td>
                     <td>{selectedProduct.backCamera}</td>
                  </tr>
                  <tr>
                     <td>RAM</td>
                     <td>{selectedProduct.ram}</td>
                  </tr>
                  <tr>
                     <td>ROM</td>
                     <td>{selectedProduct.rom}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ProductDetails;
