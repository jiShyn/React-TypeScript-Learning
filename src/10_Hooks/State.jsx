//rafce
// Để sử dụng state trong function component ta sẽ import hàm useState từ react
import React, { useState } from "react";

/**
 * Lưu ý:
 * 	- userState chỉ có thể được sử dụng bên trong function component
 * 	- Ta nên khai báo useState ở trên đầu của component
 * 	- Không đc khai báo useState bên trong các block if(), for() {},...
 *
 */

const State = () => {
   //useState nhân vào 1 tham số là giá trị khởi tạo của State
   //useState trả về 1 array gồm 2 phần tử
   // - Phần tử thứ nhất: Giá trị của state
   // - Phần tử thứ 2: Hàm dúng để thay đổi giá trị của state
   const [count, setCount] = useState(0);
   const onIncrease = () => {
      // Để thay đổi giá trị của state count ta dùng hàm setCount
      setCount(count + 1);
   };

   // Để tạo nhiều giá trị state ta chỉ cần gọi hàm useState nhiều lần
   const [message, setMessage] = useState("");
   const handleGetMessage = () => {
      const message = prompt("Input your message:");
      setMessage(message);
   };

   // State là 1 array
   const [colors, setColors] = useState(["red", "green", "blue"]);

   const handleAddColor = () => {
      const color = prompt("Input your color:");

      // Để thay đổi giá trị của State là array, ta cần tạo ra và thay đổi trên một array mới

      // Cách 1:
      // const newColors = [...colors, color];
      // setColors(newColors);

      // Cách 2:
      // setColors([...colors, color]);

      // Cách 3: hàm setColors nhận vào 1 callback có tham số là giá trị hiện tại của state colors và return về giá trị state colors mới
      setColors((colors) => [...colors, color]);
   };

   const handleRemoveColor = () => {
      const color = prompt("Input your color:");

      // Cách 1:
      // const newColors = colors.filter((item) => item !== color);
      // setColors(newColors);

      // Cách 2:
      setColors((colors) => colors.filter((item) => item !== color));
   };

   //====================================

   //State là 1 object
   const [user, setUser] = useState({ username: "", email: "" });
   const handleChange = (evt) => {
      const { name, value } = evt.target;

      // Cách 1:
      // setUsers({ ...users, [name]: value });

      // Cách 2:
      setUser((user) => ({ ...user, [name]: value }));
   };

   return (
      <div className="mt-3">
         <h1>State</h1>
         <p>Cont: {count}</p>
         <button onClick={onIncrease}>Increase</button>
         <button
            onClick={() => {
               setCount(count - 1);
            }}
         >
            Decrease
         </button>

         <br />
         <br />

         <p>Meesage: {message}</p>
         <button onClick={handleGetMessage}>Get Message</button>

         <br />
         <br />

         <p>Colors: {colors.join(", ")}</p>
         <button onClick={handleAddColor}>Add Color</button>
         <button onClick={handleRemoveColor}>Remove Color</button>

         <br />
         <br />

         <p>
            User: {user.username} - {user.email}
         </p>

         <input
            type="text"
            placeholder="Username"
            value={user.userName}
            name="username"
            onChange={handleChange}
         />

         <input
            type="text"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={handleChange}
         />
      </div>
   );
};

export default State;
