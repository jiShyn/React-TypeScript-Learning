//InitialState
const initialState = {
   products: [
      {
         id: 1,
         name: "VinSmart Live",
         display: "AMOLED, 6.2, Full HD+",
         os: "Android 9.0 (Pie)",
         frontCamera: "20 MP",
         backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
         ram: "4 GB",
         rom: "64 GB",
         price: 5700000,
         image: "./img/sp_vivo850.png",
      },
      {
         id: 2,
         name: "Meizu 16Xs",
         display: "AMOLED, FHD+ 2232 x 1080 pixels",
         os: "Android 9.0 (Pie); Flyme",
         frontCamera: "20 MP",
         backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
         ram: "4 GB",
         rom: "64 GB",
         price: 7600000,
         image: "./img/sp_note7.png",
      },
      {
         id: 3,
         name: "Iphone XS Max",
         display: "OLED, 6.5, 1242 x 2688 Pixels",
         os: "iOS 12",
         frontCamera: "Chính 12 MP & Phụ 12 MP",
         backCamera: "7 MP",
         ram: "4 GB",
         rom: "64 GB",
         price: 27000000,
         image: "./img/sp_iphoneX.png",
      },
   ],
   selectedProduct: null,
   carts: [],
};

//Reducers
const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case "selectProduct":
         return { ...state, selectedProduct: action.product };

      case "addToCart":
         const index = state.carts.findIndex(
            (item) => item.id === action.product.id
         );

         //Thêm mới 1 product vào giỏ hàng
         if (index === -1) {
            const newCart = [
               ...state.carts,
               { ...action.product, quantity: 1 },
            ];
            return {
               ...state,
               carts: newCart,
            };
         }

         //cập nhật quantity tăng lên 1 đơn vị
         const newCart = [...state.carts];
         newCart[index].quantity += 1;
         return { ...state, carts: newCart };

      case "removeProductFromCart":
         const newCarts = state.carts.filter(
            (item) => item.id !== action.productId
         );
         return { ...state, carts: newCarts };

      case "changeQuantity":
         const indexx = state.carts.findIndex(
            (item) => item.id === action.productId
         );

         const newCartss = [...state.carts];
         newCartss[indexx].quantity += action.value;
         return { ...state, carts: newCartss };

      default:
         return state;
   }
};

export default cartReducer;
