import React, { Component } from "react";
import axios from "axios";

export default class ProductList extends Component {
   handleDelete = async (productId) => {
      try {
         await axios.delete(
            `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/newProducts/${productId}`
         );
         //thành công, gọi tới hàm props onDeleteSuccess để chạy lại hàm fetchProduct ở component ProductManage
         this.props.onDeleteSuccess();
      } catch (error) {
         console.log(error);
      }
   };

   render() {
      const { products } = this.props;
      return (
         <table className="table">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th></th>
               </tr>
            </thead>

            <tbody>
               {products.map((product) => {
                  return (
                     <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>
                           <img
                              src={product.image}
                              alt=""
                              width="50px"
                              height="50px"
                           />
                        </td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                           <button
                              className="btb btn-success me-3"
                              onClick={() => {
                                 this.props.onSelectProduct(product.id);
                              }}
                           >
                              Update
                           </button>
                           <button
                              className="btn btn-danger"
                              onClick={() => {
                                 this.handleDelete(product.id);
                              }}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      );
   }
}
