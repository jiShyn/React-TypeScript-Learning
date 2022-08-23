// https://6299dac16f8c03a9784b5a5e.mockapi.io/api/newProducts
import React, { Component } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

export default class ProductManage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         //products chứa thông tin danh sách sản phẩm
         products: [],
         //selectedProduct chứa các thông tin sản phẩm cần cập nhật
         selectedProduct: null,
      };
   }

   fetchProducts = async () => {
      try {
         const { data } = await axios.get(
            "https://6299dac16f8c03a9784b5a5e.mockapi.io/api/newProducts"
         );

         this.setState({ products: data });
      } catch (error) {
         console.log(error);
      }
   };

   fetchProductDetail = async (productId) => {
      try {
         const { data } = await axios.get(
            `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/newProducts/${productId}`
         );
         //thành công
         this.setState({ selectedProduct: data });
      } catch (error) {
         console.log(error);
      }
   };

   componentDidMount() {
      this.fetchProducts();
   }

   render() {
      return (
         <div className="container">
            <h1 className="text-center text-primary">Product Manage</h1>
            <div className="card mb-5">
               <div className="card-header bg-dark text-white">
                  <strong>ProductForm</strong>
               </div>
               <div className="card-body">
                  <ProductForm
                     onSuccess={this.fetchProducts}
                     product={this.state.selectedProduct}
                  />
               </div>
            </div>

            <ProductList
               products={this.state.products}
               onDeleteSuccess={this.fetchProducts}
               onSelectProduct={this.fetchProductDetail}
            />
         </div>
      );
   }
}
