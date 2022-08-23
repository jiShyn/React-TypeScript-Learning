import axios from "axios";
import React, { useEffect, useState } from "react";

const UserForm = ({ onSubmitSuccess, user }) => {
   const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      dateOfBirth: "",
   });

   const handleChange = (evt) => {
      const { name, value } = evt.target;
      setValues({ ...values, [name]: value });
   };

   const handleSubmit = async (evt) => {
      evt.preventDefault();

      try {
         const { id, ...payload } = values;
         if (id) {
            //Call API cập nhật user
            await axios.put(
               `https://629757b414e756fe3b2dc8f0.mockapi.io/api/users/${id}`,
               payload
            );
         } else {
            //Call API theem User
            await axios.post(
               "https://629757b414e756fe3b2dc8f0.mockapi.io/api/users",
               payload
            );
         }

         //Thành công => gọi tới 1 prop onSubmitSuccess để component UserManagement gọi lại api get users và thay đổi state users
         onSubmitSuccess();
         //reset form
         setValues({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            dateOfBirth: "",
         });
      } catch (error) {
         console.log(error);
      }
   };

   //useEffect này sẽ đc thực thi sau khi render nếu giá trị của prop user bị thay đổi
   useEffect(() => {
      if (!user) return;
      //dùng prop user gán cho state values để fill giá trị lên các input
      setValues({ ...user });
   }, [user]);

   return (
      <form onSubmit={handleSubmit}>
         {/*First Name*/}
         <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
               First Name
            </label>
            <input
               type="text"
               id="firstName"
               className="form-control"
               value={values.firstName}
               name="firstName"
               onChange={handleChange}
            />
         </div>

         {/* Last Name*/}
         <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
               Last Name
            </label>
            <input
               type="text"
               id="lastName"
               className="form-control"
               value={values.lastName}
               name="lastName"
               onChange={handleChange}
            />
         </div>
         {/* Email*/}
         <div className="mb-3">
            <label htmlFor="img" className="form-label">
               Email
            </label>
            <input
               type="text"
               id="img"
               className="form-control"
               value={values.email}
               name="email"
               onChange={handleChange}
            />
         </div>
         {/* Address*/}
         <div className="mb-3">
            <label htmlFor="address" className="form-label">
               Address
            </label>
            <input
               type="text"
               id="address"
               className="form-control"
               value={values.address}
               name="address"
               onChange={handleChange}
            />
         </div>

         {/* Date Of Birth*/}
         <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
               Date Of Birth
            </label>
            <input
               type="text"
               id="dateOfBirth"
               className="form-control"
               value={values.dateOfBirth}
               name="dateOfBirth"
               onChange={handleChange}
            />
         </div>

         <button className="btn btn-dark">Submit</button>
      </form>
   );
};

export default UserForm;
