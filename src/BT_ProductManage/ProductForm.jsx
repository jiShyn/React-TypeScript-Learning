import React, { Component } from "react";
import axios from "axios";

export default class ProductForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         //value để lưu trữ các giá trị của các input
         values: {
            name: "",
            image: "",
            price: "",
            description: "",
         },
      };
   }

   //bắt sự kiện thay đổi input và setState
   handleChange = (event) => {
      const { value, name } = event.target;
      this.setState((state) => ({
         values: {
            ...state.values,
            [name]: value,
         },
      }));
   };

   //bắt sự kiện form đc submit
   handleSubmit = async (event) => {
      //ngăn chặn hành vi reload page khi submit
      event.preventDefault();

      const { id, ...payload } = this.state.values;

      try {
         if (id) {
            //cập nhật
            await axios.put(
               `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/newProducts/${id}`,
               payload
            );
         } else {
            //thêm mới
            await axios.post(
               "https://6299dac16f8c03a9784b5a5e.mockapi.io/api/newProducts",
               payload
            );
         }

         //callAPI thành công
         //B1: reset form
         this.setState({
            values: {
               name: "",
               image: "",
               price: "",
               description: "",
            },
         });
         //B2: bởi vì khi call API thêm sản phẩm, dữ liệu chỉ đc cập nhật ở API, ta cần call API để render ra giao diện dữ liệu mới nhất qua get Product,
         this.props.onSuccess();
      } catch (error) {
         console.log(error);
      }
   };

   componentDidUpdate(prevProps, prevState) {
      //bởi vì componentDidUpdate sẽ tự động đc thực thi khi state hoặc props thay đổi
      //kiểm tra nếu prop product thay đổi, setState lại cho values bằng giá trị mới của prop product
      if (this.props.product && this.props.product !== prevProps.product) {
         this.setState({ values: { ...this.props.product } });
      }
   }
   render() {
      const { values } = this.state;
      return (
         <form onSubmit={this.handleSubmit}>
            {/* Name*/}
            <div className="mb-3">
               <label htmlFor="name" className="form-label">
                  Name
               </label>
               <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={values.name}
                  name="name"
                  onChange={this.handleChange}
               />
            </div>

            {/* Description*/}
            <div className="mb-3">
               <label htmlFor="description" className="form-label">
                  Description
               </label>
               <input
                  type="text"
                  id="description"
                  className="form-control"
                  value={values.description}
                  name="description"
                  onChange={this.handleChange}
               />
            </div>
            {/* Image*/}
            <div className="mb-3">
               <label htmlFor="img" className="form-label">
                  Image
               </label>
               <input
                  type="text"
                  id="img"
                  className="form-control"
                  value={values.image}
                  name="image"
                  onChange={this.handleChange}
               />
            </div>
            {/* Price*/}
            <div className="mb-3">
               <label htmlFor="price" className="form-label">
                  Price
               </label>
               <input
                  type="text"
                  id="price"
                  className="form-control"
                  value={values.price}
                  name="price"
                  onChange={this.handleChange}
               />
            </div>

            <button className="btn btn-dark">Submit</button>
         </form>
      );
   }
}
