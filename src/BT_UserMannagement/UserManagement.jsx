import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserManagement = () => {
   //tạo state users chứa data từ API
   const [users, setUsers] = useState([]);

   //tạo state chưa selectedUser từ API
   const [selectedUser, setSelectedUser] = useState(null);

   const fetchUsers = async () => {
      try {
         //call API
         const { data } = await axios.get(
            "https://629757b414e756fe3b2dc8f0.mockapi.io/api/users"
         );

         //call api thành công => gọi hàm setUsers(data) để gán data từ API cho state users
         setUsers(data);
      } catch (error) {
         console.log(error);
      }
   };

   const fetchUser = async (userId) => {
      try {
         //call API
         const { data } = await axios.get(
            `https://629757b414e756fe3b2dc8f0.mockapi.io/api/users/${userId}`
         );

         //call api thành công => gọi hàm setUsers(data) để gán data từ API cho state users
         setSelectedUser(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   return (
      <div className="container">
         <h1 className="text-center text-primary">User Management</h1>
         <div className="card mb-5">
            <div className="card-header bg-dark text-white">
               <strong>ProductForm</strong>
            </div>
            <div className="card-body">
               <UserForm onSubmitSuccess={fetchUsers} user={selectedUser} />
            </div>
         </div>

         <UserList
            users={users}
            onDeleteSuccess={fetchUsers}
            onSelect={fetchUser}
         />
      </div>
   );
};

export default UserManagement;

//https://629757b414e756fe3b2dc8f0.mockapi.io/api/users
