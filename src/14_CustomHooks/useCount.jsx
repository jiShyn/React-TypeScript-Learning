import { useState } from "react";

//customHooks: là những hooks do mình tự định nghĩa để thực hiện 1 logic nào đó, thường đc sử dụng để hia sẽ logic giữa các component
//custom hooks phải đc đặt tên theo format có từ khóa use ở đầu, VD: useCount, use...

// - Khác với component, custom hooks không return về UI(jsx) mà sẽ return về một dữ liệu nào đó (sring, number, array, object,...)
// - Khác với function thông thường, custom hooks được phép sử dụng các react hooks (useState, useEffect,...)

const useCount = () => {
	const [count, setCount] = useState(0);

	const handleIncrease = () => {
		setCount(count + 1);
	};

	const handleDecrease = () => {
		setCount(count - 1);
	};


	

	return {
		count, handleIncrease, handleDecrease
	};
};

export default useCount;
