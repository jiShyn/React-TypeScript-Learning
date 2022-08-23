import React, { Component } from "react";
import data from "./data.json";
import "./Movie.css";

export default class Movie extends Component {
   render() {
      return (
         <div className="movie-wrapper">
            <div className="container">
               <div className="row">
                  {data.map((movie) => {
                     return (
                        <div key={movie.maPhim} className="col-sm-3">
                           <div className="card">
                              <img
                                 src={movie.hinhAnh}
                                 alt={movie.tenPhim}
                                 height="500px"
                              />
                              <div className="card-body">
                                 <h3 className="card-title">{movie.tenPhim}</h3>
                                 <p className="card-text">
                                    {movie.ngayKhoiChieu}
                                 </p>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}
