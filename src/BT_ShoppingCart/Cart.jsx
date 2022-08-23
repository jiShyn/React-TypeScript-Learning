import React from "react";

// props:
// - isOpen (boolean): dùng để quyết định modal giỏ hàng có được hiển thị hay không
// - onClose (function): dùng để tắt modal
const Cart = ({
   carts,
   isOpen = false,
   onClose,
   onRemove,
   onChangeQuantity,
}) => {
   const handleRemoveProduct = (productId) => {
      // productId: id của sản phẩm muốn xoá khỏi giỏ hàng
      // Props là read-only: chỉ dùng để đọc không được thay đổi giá trị của props => ta không thể thay đổi giá trị của prop carts tại component này

      // Ta cần đưa productId lên component ShoppingCart để thay đổi giá trị state carts
      onRemove(productId);
   };

   const handleChangeQuantity = (productID, quantity) => {
      onChangeQuantity(productID, quantity);
   };

   return (
      <>
         <div
            style={{ display: isOpen ? "block" : "none" }}
            className="modal fade show"
            tabindex="-1"
         >
            <div className="modal-dialog modal-lg">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">Product Cart</h5>
                     <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={onClose}
                     ></button>
                  </div>
                  <div className="modal-body">
                     <table className="table">
                        <thead>
                           <tr>
                              <th>Name</th>
                              <th>Image</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total Price</th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           {carts.map((item) => {
                              return (
                                 <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                       <img
                                          src={item.image}
                                          alt={item.name}
                                          width="50px"
                                          height="50px"
                                       />
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                       <button
                                          className="btn btn-dark"
                                          disabled={item.quantity === 1}
                                          onClick={() =>
                                             handleChangeQuantity(item.id, -1)
                                          }
                                       >
                                          -
                                       </button>
                                       <span className="mx-2">
                                          {item.quantity}
                                       </span>
                                       <button
                                          className="btn btn-dark"
                                          onClick={() =>
                                             handleChangeQuantity(item.id, 1)
                                          }
                                       >
                                          +
                                       </button>
                                    </td>
                                    <td>{item.price * item.quantity}</td>
                                    <td>
                                       <button
                                          className="btn btn-danger"
                                          onClick={() =>
                                             handleRemoveProduct(item.id)
                                          }
                                       >
                                          X
                                       </button>
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
                  <div className="modal-footer">
                     <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onClose}
                     >
                        Close
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {isOpen && <div className="modal-backdrop fade show"></div>}
      </>
   );
};

export default Cart;
