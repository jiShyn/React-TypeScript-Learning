// Snippets để tạo nhanh function component:
// - Regular function: rfce
// - Arrow function: rafce

import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    // Khi return về jsx bắt buộc phải có 1 tag bao bọc lấy tất cả (không cho phép return về từ 2 thẻ đồng cấp với nhau trở lên)
    // Trường hợp nếu ta không muốn có 1 tag dư, ta có thể sử dụng tag rỗng <></>
    <>
      <Header />
      <div className="d-flex">
        <div className="w-25">
          <Sidebar />
        </div>
        <div className="w-75">
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
