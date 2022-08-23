import React, { Component } from "react";

export default class SelectCar extends Component {
  constructor() {
    super();

    this.state = {
      // Lưu trữ đường dẫn hình ảnh của xe
      imgUrl: "/img/cars/products/black-car.jpg",
    };
  }

  changeCar = (color) => {
    // Dùng cái màu nhận được để thay đổi giá trị state imgUrl
    const imgUrl = `/img/cars/products/${color}-car.jpg`;
    this.setState({ imgUrl });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <img
              src={this.state.imgUrl}
              alt="car"
              height="400px"
              width="100%"
            />
          </div>
          <div className="col-sm-4">
            <ul>
              <li className="mb-3" onClick={() => this.changeCar("black")}>
                <img
                  src="./img/cars/icons/icon-black.jpg"
                  alt="icon"
                  width="50px"
                />
                <span className="ms-2">Black</span>
              </li>

              <li className="mb-3" onClick={() => this.changeCar("silver")}>
                <img
                  src="./img/cars/icons/icon-silver.jpg"
                  alt="icon"
                  width="50px"
                />
                <span className="ms-2">Silver</span>
              </li>

              <li className="mb-3" onClick={() => this.changeCar("steel")}>
                <img
                  src="./img/cars/icons/icon-steel.jpg"
                  alt="icon"
                  width="50px"
                />
                <span className="ms-2">Steel</span>
              </li>

              <li className="mb-3" onClick={() => this.changeCar("red")}>
                <img
                  src="./img/cars/icons/icon-red.jpg"
                  alt="icon"
                  width="50px"
                />
                <span className="ms-2">Red</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
