import * as actionTypes from "../constants/todoConstants";

const initialState = {
   todos: [],
   filter: "all",
   search: "",
   // State isLoading dùng để quản lý khi dữ liệu đang đc tải sẽ hiển thị loading ra cho user thấy
   isLoading: false,
   // State error dùng để hiển thị lỗi nếu call API thất bại
   error: null,
};

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.GET_TODOS_PENDING: {
         return { ...state, isLoading: true, error: null };
      }
      case actionTypes.GET_TODOS_FULFILLED: {
         return { ...state, todos: action.data, isLoading: false };
      }

      case actionTypes.GET_TODOS_REJECTED: {
         return { ...state, error: action.error, isLoading: false };
      }

      case actionTypes.CHANGE_FILTER: {
         return { ...state, filter: action.filter };
      }
      case actionTypes.CHANGE_SEARCH: {
         return { ...state, search: action.search };
      }

      default:
         return state;
   }
};

export default todoReducer;
