import React from "react";

// HTML: <button onclick="handleClick()">Click</button>

// const Event = () => {
//   // Hàm được gọi khi user click vào button Click
//   // Mọi hàm xử lý sự kiện đều nhận được một đối tượng event
//   const handleClick = (event) => {
//     console.log(event.target);
//     alert("clicked");
//   };

//   // Hàm được gọi khi user click vào button Show Message và truyền vào 1 tham số message
//   const showMessage = (event, message) => {
//     alert(message);
//   };

//   // Hàm được gọi khi user thay đổi giá trị của input
//   const handleChange = (event) => {
//     // Muốn lấy giá ra giá trị hiện tại của input
//     console.log(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     // Kiểm tra nếu không phải là Enter thì không làm gì hết
//     if (event.key !== "Enter") {
//       return;
//     }

//     // Là kí tự Enter => Show giá trị input ra console
//     console.log(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Event</h1>

//       {/* Khi truyền một hàm vào onClick lưu ý là ta sẽ không có dấu () gọi hàm mà chỉ truyền vào dạng callback */}
//       <button onClick={handleClick}>Click</button>

//       <br />
//       <br />

//       {/* Trường hợp muốn truyền tham số vào cho hàm xử lý sự kiện, ta sẽ gọi ra 1 hàm ẩn danh và bên trong hàm ẩn danh ta sẽ gọi tới hàm xử lý sự kiện và truyền vào tham số */}
//       <button
//         onClick={(event) => {
//           showMessage(event, "Hello Cybersoft");
//         }}
//       >
//         Show Message
//       </button>

//       <br />
//       <br />

//       {/* Lắng nghe sự kiện khi user thay đổi giá trị của input */}
//       <input
//         type="text"
//         placeholder="Input your name"
//         onChange={handleChange}
//       />

//       <br />
//       <br />

//       <input type="text" placeholder="Search" onKeyDown={handleKeyDown} />
//     </div>
//   );
// };

class Event extends React.Component {
  constructor() {
    super();
    this.showMessage = this.showMessage.bind(this);
  }

  message = "Hello Cybersoft";

  // Phương thức xử lý sự kiện của button Click
  handleClick = (event) => {
    alert("Clicked");
  };

  // Khi một hàm xử lý sự kiện sử dụng this bên trong hàm, ta cần lưu ý:
  // C1: Viết hàm theo dạng arrow function
  // showMessage = () => {
  //   alert(this.message);
  // }
  // C2: Cần bind this của class Event vào bên trong hàm showMessage ở constructor (dòng 74)
  showMessage() {
    alert(this.message);
  }

  render() {
    return (
      <div>
        <h1>Event</h1>

        <button onClick={this.handleClick}>Click</button>

        <br />
        <br />

        <button onClick={this.showMessage}>Show Message</button>
      </div>
    );
  }
}

export default Event;
