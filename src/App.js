import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import cn from "classnames";

import HelloWorld from "./1_Components/HelloWorld";
import Greeting from "./1_Components/Greeting";
import Home from "./1_Ex_HomePage/Home";
import Msi from "./1_Ex_MSI/Msi";
import DataBinding from "./2_DataBinding/DataBinding";
import Event from "./3_Event/Event";
import State from "./4_State/State";
import SelectCar from "./4_Ex_SelectCar/SelectCar";
import ConditionalRendering from "./5_ConditionalRendering/ConditionalRendering";
import Map from "./6_Map/Map";
import Movie from "./6_Ex_Movie/Movie";
import Props from "./7_Props/Props";
import ShoesShop from "./7_Ex_ShoesShop/ShoesShop";
import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
import LifeCycle from "./8_LifeCycle/Lifecycle";
import ProductManage from "./BT_ProductManage/ProductManage";
import Composition from "./9_Composition/Composition";
import Hooks from "./10_Hooks/Hooks";
import UserManagement from "./BT_UserMannagement/UserManagement";
import Refs from "./11_Refs/Refs";
import Style from "./12_Style/Style";
import StyledComponent from "./13_StyledComponent/StyledComponent";
import CustomHooks from "./14_CustomHooks/CustomHooks";
import Custom__Hooks from "./14_CustomHooks _practice/Custom__Hooks";
import Redux from "./15._Redux/Redux";
import ShoppingCartRedux from "./BT_ShoppingCartRedux/ShoppingCart";
import ShoppingCartReduxRecode from "./Recode_BT_ShoppingCartRedux/ShoppingCart";
import TodoApp from "./BT_TodoAppRedux/TodoApp";
import TodoAppRecode from "./Recode_BT_TodoAppRedux/TodoApp";

// Component: một function return về JSX mô tả những gì sẽ được hiển thị trên giao diện
function App() {
   // JSX: Javascript XML
   // JSX là một cú pháp đặc biệt cho phép viết HTML bên trong javascript
   // Bởi vì JSX gần với JS hơn là với HTML, nên các property/attribute của thẻ HTML ta cần chuyển thành camelCase
   // VD: class -> className, for -> htmlFor, tabindex -> tabIndex
   // return (
   //   <div className="App">
   //     <h1>Hello Reactjs</h1>
   //   </div>
   // );
   // Bản chất đoạn code JSX trên sẽ được transform về JS thuần như sau
   // return React.createElement(
   //   "div", { className: "App" },
   //   React.createElement("h1", null, "Hello Reactjs")
   // );

   return (
      // 1. Components
      // <div className="text-center text-primary">
      //   <h1>App</h1>
      //   <HelloWorld />
      //   <Greeting />
      // </div>
      // <Home />
      // <Msi />

      // 2. Data Binding
      // <DataBinding />

      // 3. Event
      // <Event />

      // 4. State
      // <State />
      // <SelectCar />

      // 5. Conditional Rendering
      // <ConditionalRendering/>

      // 6> Map
      // <Map/>

      // 6. Ex_Movie
      // <Movie/>

      // 7. Props
      // <Props/>
      // <ShoesShop/>

      //Bài tập tổng hợp State, Props
      // <ShoppingCart/>

      // 8. Lifecycle
      // <div>
      //    {/* <LifeCycle />   */}
      // </div>

      // Bài tập tổng hợp State, Props, Lifecycle
      // <ProductManage/>

      // 9. Composition
      // <Composition/>

      // 10. Hooks
      // <Hooks />

      // Bài tập Hooks
      // <UserManagement />

      // 11. Refs
      // <Refs/>

      // 12. Style
      // <Style />

      // Bài tập tự luyện
      // <GroceryBud/>

      // 13. StyledComponent (CSS in JS)
      // <StyledComponent/>

      // 14. Custom Hooks
      // <CustomHooks/>
      // <Custom__Hooks/>

      // 15.Redux
      // <Redux />

      // Bài tập Shopping Cart Redux
      // <ShoppingCartRedux/>
      // <ShoppingCartReduxRecode/>

      // Bài tập TodoAppRedux
      // <TodoApp />
      // <TodoAppRecode/>

      //Setup Routes
      <>
         {/* <nav className="nav justify-content-center">
            <Link to="/" className="nav-link">Todo App</Link>
            <Link to="/shopping-cart-redux" className="nav-link">Shoping Cart</Link>
            <Link to="/custom-hook" className="nav-link">Custom Hook</Link>
         </nav> */}
         <nav className="nav justify-content-center">
            <NavLink
               to="/"
               className={({ isActive }) =>
                  cn("nav-link", { "text-danger": isActive })
               }
            >
               Todo App
            </NavLink>
            <NavLink
               to="/shopping-cart-redux"
               className={({ isActive }) =>
                  cn("nav-link", { "text-danger": isActive })
               }
            >
               Shoping Cart
            </NavLink>
            <NavLink
               to="/custom-hook"
               className={({ isActive }) =>
                  cn("nav-link", { "text-danger": isActive })
               }
            >
               Custom Hook
            </NavLink>
         </nav>
         <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route
               path="/shopping-cart-redux"
               element={<ShoppingCartRedux />}
            />
            <Route path="/custom-hook" element={<CustomHooks />} />

            {/*NotFound phải đc đặt ở cuối cùng */}
            <Route path="*" element={<h1>Not Found!!!</h1>} />
         </Routes>
      </>
   );
}

export default App;
