import React, { Component } from "react";

export default class ConditionalRendering extends Component {
   constructor() {
      super();

      this.state = {
         isActive: true,
         isLoggedIn: false,
         unreadMessage: ["A", "B", "C"],
      };
   }

   handleToggler = () => {
      this.setState((state) => ({ isActive: !state.isActive }));
   };

   render() {
      // {
      //    /*Sử dụng ternary operator để hiển thị giao diện theo điều kiện */
      // }
      // return (
      //    <div>
      //       <h1>text</h1>

      //       {/*Thẻ h3 chỉ đc hiển thị khi state isActive là thue */}
      //       {this.state.isActive ? <h3>Hello Cybersoft</h3> : <h3>Hello BC27</h3>}
      //       <button onClick={this.handleToggler}>handleToggler</button>
      //    </div>
      // );

      //Sử dụng if/elsse để hiển thị giao diện theo điều kiện
      if (this.state.isLoggedIn) {
         return (
            <div>
               <h1>Welcome back!</h1>
               {/* dùng toán tử && để chỉ hiển thị giao diện: lấy falsy value hoặc value cuối cùng */}
               {!!this.state.unreadMessage.length && (
                  <p>
                     You have {this.state.unreadMessage.length} unread messages
                     <button
                        onClick={() => this.setState({ unreadMessage: [] })}
                     >
                        Clear
                     </button>
                  </p>
               )}

               <button onClick={() => this.setState({ isLoggedIn: false })}>
                  Logout
               </button>
            </div>
         );
      }

      return (
         <div>
            <h1>Please Login</h1>
            <button onClick={() => this.setState({ isLoggedIn: true })}>
               Login
            </button>
         </div>
      );
   }
}
