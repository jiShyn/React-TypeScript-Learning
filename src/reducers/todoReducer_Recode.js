const initialState = {
   todos: [],
   filter: "all",
   search: "",
   isLoading: false,
   error: null,
};

const todoReducer_Recode = (state = initialState, action) => {
   switch (action.type) {
      case "getTodos/pending": {
         return { ...state, isLoading: true };
      }

      case "getTodos/fulfilled": {
         return { ...state, todos: action.data, isLoading: false };
      }

      case "getTodos/rejected": {
         return { ...state, error: action.error, isLoading: false };
      }

      case "changeFilter":
         return { ...state, filter: action.filter };

      case "searchTodo":
         return { ...state, search: action.title };

      default:
         return state;
   }
};

export default todoReducer_Recode;
