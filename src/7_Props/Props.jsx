//rafce
import React from "react";
import Callback from "./Callback";
import Product from "./Product";
import Welcome from "./Welcome";

const products = [
   { id: 1, name: "Iphone 13 Pro Max", price: 30000000 },
   { id: 2, name: "Samsung Galaxy S22 Ultra", price: 25000000 },
   { id: 3, name: "Xiaomi Mi 12", price: 10000000 },
];

const Props = () => {
   // Hàm này sẽ đc gọi khi component Callback gọi tới props onClick và truyền kèm params 
   const handleClick = (name) => {
      alert("Hello "+ name)
   }


   return (
      <div>
         <h1>Props</h1>
         <Welcome />
         <Welcome name="Yasuo" email="yasuo@gmail.com" />
         <Welcome name="Yone" email="yone@gmail.com" />

         <br />
         <br />
         <br />

         <div className="row">
            {products.map((product) => {
               return (
                  <div key={product.id} className="col-sm-4">
                     <Product product={product} />
                  </div>
               );
            })}
         </div>

         <br />
         <br />
         <Callback onClick={handleClick}/>
         {/* <button onClick={handleClick}>Click</button> */}
      </div>
   );
};

export default Props;
