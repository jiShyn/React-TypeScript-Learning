// import React from "react";
// Component nhận đc 1 tham số là 1 obj chưa dữ liệu đc truyền từ component cha
// const Welcome = (props) => {
//    console.log(props);
//    return (
//       <div>
//          <p>
//             Name: {props.name} - Email: {props.email}
//          </p>
//       </div>
//    );
// };

import React, { Component } from "react";

export default class Welcome extends Component {
   render() {
      return (
         <div>
            {" "}
            <p>
               Name: {this.props.name} - Email: {this.props.email}
            </p>
         </div>
      );
   }
}

Welcome.defaultProps = {}
// export default Welcome;
