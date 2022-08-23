import axios from "axios";
import React from "react";

const UserList = ({ users, onSelect, onDeleteSuccess }) => {
   const handleDelete = async (userId) => {
      try {
         await axios.delete(
            `https://629757b414e756fe3b2dc8f0.mockapi.io/api/users/${userId}`
         );
         onDeleteSuccess();
      } catch (error) {
         console.log(error);
      }
   };

   const handleSelect =  (userId) => {
      onSelect(userId);
   };

   return (
      <table className="table">
         <thead>
            <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Address</th>
               <th>Date Of Bỉth</th>
               <th></th>
            </tr>
         </thead>

         <tbody>
            {users.map((user) => {
               return (
                  <tr key={user.id}>
                     <td>{user.firstName}</td>
                     <td>{user.lastName}</td>
                     <td>{user.email}</td>
                     <td>{user.address}</td>
                     <td>{user.dateOfBirth}</td>
                     <td>
                        <button
                           className="btb btn-success me-3"
                           onClick={() => {
                              handleSelect(user.id);
                           }}
                        >
                           Update
                        </button>
                        <button
                           className="btn btn-danger"
                           onClick={() => {
                              handleDelete(user.id);
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
};

export default UserList;
