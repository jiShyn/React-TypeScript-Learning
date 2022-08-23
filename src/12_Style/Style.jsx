import React from "react";
import "./style.css";
import css from "./style.module.css";
import scss from "./style.module.scss";

// console.log("css:", css);
// console.log("scss:", scss);

const Style = () => {
   return (
      <div>
         <h1>Style</h1>

         {/* css thuần */}
         <h3 className="title">CSS</h3>

         {/* css module */}
         <h3 className={css.title}>CSS Module</h3>
         <div className={css.productItem}>Iphone 13 Pro Max</div>

         {/* scss module */}
         <div className={scss.title}>SCSS Module</div>
         <ul className={scss.list}>
            <li className={scss.item}>Home</li>
            <li className={scss.item}>About</li>
            <li className={scss.item}>Contact</li>
         </ul>
      </div>
   );
};

export default Style;
