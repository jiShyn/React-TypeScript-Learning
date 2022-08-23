//rcc
//Lifecycle chỉ tồn tại trong class component
import React, { Component } from "react";
import axios from "axios";

/**
 * MOUNTING: component đc khởi tạo
 * - constructer: thường dùng để khởi tạo state, bind các method
 * - render: dùng để return về react element (jsx) là giao diện sẽ đc hiển thị
 * - componentDidMount:
 * 	+ Dùng để xử lí side effect: callAPI, setTimeOut, setInterval,..
 *    + Dùng để tương tác với DOM
 *    + Dùng để setState
 *
 * UPDATING: component nhận đc props mới hoặc gọi setState
 * - render
 * - componentDidUpdate
 *    + Dùng để setState
 *    + Dùng để xử lý 1 logic nào đó khi state hoặc props thay đổi
 *
 * UNMOUNTING: Trước khi component bị hủy bỏ
 * - componentWillUnmount
 *    + Dùng để dọn dẹp dữ liệu
 *    + Trong trường hợp ở componentDidMount có sử dụng setTimeout/setInterval ta cần clearTimeout/clearInterval
 *
 * => thứ tự Component tự động chạy là constructer -> render -> componentDidMount
 */

export default class LifeCycle extends Component {
   constructor(props) {
      super(props);

      this.state = {
         //users: dùng để chứa data từ api trả về
         users: [],
         //userID: dùng để lưu trữ id user đang đc chọn
         userId: "",
         //selectedUser: dùng để lưu trữ data user đang đc chọn từ API
         selectedUser: null,
      };

      console.log("Constructer run");
   }

   fetchUsers = async () => {
      try {
         const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
         );
         //CallAPI thành công => setState cho users bằng data nhận đc từ API
         this.setState({ users: data });
      } catch (error) {
         console.log(error);
      }
   };

   fetchUserDetails = async () => {
      try {
         const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${this.state.userId}`
         );
         //Call API thành công => setState cho selectedUser bằng data từ API
         this.setState({ selectedUser: data });
      } catch (error) {
         console.log(error);
      }
   };

   handleSelect = (userId) => {
      this.setState({ userId });
   };

   componentDidMount() {
      console.log("componentDidMount run");
      this.fetchUsers();

      this.timer = setTimeout(() => {
         alert("Bigshow");
      }, 5000);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate run");

      //Kiểm tra xem state userId có thay đổi không, để gọi API get user details
      //componentDidUpdate cung cấp 2 tham số là giá trị trước khi thay đổi của Props và States
      // Ta sẽ dùng 2 giá trị để so sánh vs state và props hiện để biết đc giá trị nào đã thay đổi
      if (prevState.userId !== this.state.userId) {
         console.log("state userId change");
         this.fetchUserDetails();
      }
   }

   componentWillUnmount() {
      console.log("componentWillUnmount run");
      // clearTimeout(this.timer)
   }

   render() {
      console.log("render run");
      const { users, selectedUser } = this.state;
      return (
         <div>
            <h1>Danh sách người dùng</h1>
            {users.map((user) => {
               return (
                  <p key={user.id} className="mb-2">
                     Name: {user.name} - Email: {user.email}
                     <button onClick={() => this.handleSelect(user.id)}>
                        Details
                     </button>
                  </p>
               );
            })}

            <h1>Chi tiết người dùng</h1>
            {selectedUser && (
               <div>
                  <h3>{selectedUser.name}</h3>
                  <p>Email : {selectedUser.email}</p>
                  <p>Phone : {selectedUser.phone}</p>
                  <p>Website : {selectedUser.website}</p>
               </div>
            )}
         </div>
      );
   }
}
