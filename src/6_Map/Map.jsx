import React, { Component } from "react";

const products = [
   { id: 1, name: "Iphone 13 Pro Max", price: 30000000 },
   { id: 2, name: "Samsung Galaxy S22 Ultra", price: 25000000 },
   { id: 3, name: "Xiaomi Mi 12", price: 10000000 },
];

export default class Map extends Component {
   render() {
      return (
         <div>
            <div>Map</div>
            {products.map((product) => {
               //return về jsx
               //khi dùng map sẽ return về jsx, bắt buộc phải có thuộc tính key cho thẻ cha, và giá trị key phải là duy nhất ko đc trùng lặp
               return (
                  <div key={product.id}>
                     <h3>{product.name}</h3>
                     <p>{product.price}</p>
                  </div>
               );
            })}
         </div>
      );
   }
}
