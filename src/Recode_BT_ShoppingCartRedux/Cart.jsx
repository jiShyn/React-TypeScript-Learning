import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ onClose, isOpen }) => {
  const {carts} = useSelector((state) => state.cart_Recode)
  const dispatch = useDispatch()
  const handleRemove = (productId) => {
   dispatch({type: "removeProductFromCarts", productId})
  }
  const handleChangeQuantity = (productId, value) => {
   dispatch({type: "changeQuantity", productId, value})
  }
  
   return (
      <>
         <div
            style={{ display: isOpen ? "block" : "none" }}
            className="modal fade show"
            tabIndex="-1"
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
                                          onClick={() => handleRemove(item.id)}
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
