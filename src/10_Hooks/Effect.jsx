// Để sử dụng các khái niệm tượng tự lifecycle của class component bên trong function component ta import hàm useEffect từ react
import React, { useState, useEffect } from "react";

/**
 * MOUNTING: component đc khởi tạo
 * 	- rendering
 * 	- ren useEffect()
 * 
 * UPDATING: state hoặc props thay đổi
 * 	- rendering
 * 	- run useEffect() cleanup
 * 	- run useEffect()
 *
 * UNMOUNT: component bị hủy bỏ
 * 	- run useEffect() cleanup
 */

const Effect = () => {
   const [count, setCount] = useState(0);
   const onIncrease = () => {
      // Để thay đổi giá trị của state count ta dùng hàm setCount
      setCount(count + 1);
   };

   const [message, setMessage] = useState("");
   const handleGetMessage = () => {
      const message = prompt("Input your message:");
      setMessage(message);
   };

   useEffect(() => {
      console.log("useEffect [message] run");
   }, [message]);

   // Hàm useEffect hận vào 2 tham số
   // Tham số thứ nhất: 1 callback function
   // Tham số thứ hai (tùy chọn): trường hợp này là 1 array rỗng
   useEffect(() => {
      // effect: đc thực thi 1 lần duy nhất sau lần render đầu tiên (tương đương componentDidMount)
      // effect: thường dùng để call API, thay đổi state, tương tác với DOM
      console.log("useEffect [] run");

      // cleanup effect: Được thực thi trước khi component bị unmount (tương đương componentWillUnmount)
      // Thường dùng để cleanup data, clearTimeout, removeAddEventListener
      return () => {
         console.log("useEffect [] cleanup run");
      };
   }, []);

   // DÙng useEffect kèm điều kiện
   // useEffect nhận vào tham số thứ 2 là array chứa các depedencies (phụ thuộc)
   // depedencies là các giá trị state hoặc props
   useEffect(() => {
      // Effect: đc thực thi 1 lần sau lần render đầu tiên, và các lần render tiếp theo nếu các depedencies của nó bị thay đổi
      console.log("useEffect [count] run");
      // Clean up effect(tùy chọn): đc thực thi trc lần run effect tiếp theo hoặc trc khi component bị hủy bỏ
      return () => {
         console.log("useEffect [count] cleanup run");
      };
   }, [count]);


	 // useEffect không có tham số thứ 2 (no recommend)
	 useEffect(() => {
		// effect: luôn luôn đc thực thi sau mỗi lần render
		console.log("useEffect không có tham số thứ 2 run");
	 })



   console.log("render run");
   return (
      <div className="mt-3">
         <h1>Effect</h1>
         <h1>State</h1>
         <p>Cont: {count}</p>
         <button onClick={onIncrease}>Increase</button>

         <br />
         <br />

         <p>Meesage: {message}</p>
         <button onClick={handleGetMessage}>Get Message</button>
      </div>
   );
};

export default Effect;
