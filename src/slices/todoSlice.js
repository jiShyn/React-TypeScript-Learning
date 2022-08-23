import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   todos: [],
   filter: "all",
   search: "",
   // State isLoading dùng để quản lý khi dữ liệu đang đc tải sẽ hiển thị loading ra cho user thấy
   isLoading: false,
   // State error dùng để hiển thị lỗi nếu call API thất bại
   error: null,
};

const FILTER_MAPPING = {
   active: false,
   done: true,
   all: undefined,
};

//thunk action xử lí các action bất đồng bộ
// createAsyncThunk() nhận vào 2 tham số, tham số 1 là action type, tham số 2 là function
export const getTodos = createAsyncThunk(
   "todo/getTodos", //action type
   // hàm nhận vào 2 tham số, tham số thứ 1 là params của hàm getTodos khi sử dụng, tham số thứ 2 là 1 obj thunk API chứa các hàm như dispatch, getState,...
   async (_, { getState, rejectWithValue }) => {
      try {
         // dispatch pending
         const { filter, search } = getState().todo;
         const { data } = await axios.get(
            "https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos",
            {
               params: {
                  isDone: FILTER_MAPPING[filter],
                  title: search,
               },
            }
         );
         return data; //dispatch fulfilled
      } catch (error) {
         //  throw error.response.data;
         //  throw rejectWithValue(error.response.data); //dispatch rejected
         return rejectWithValue(error.response.data); //dispatch rejected
      }
   }
);

export const addTodo = createAsyncThunk(
   "todo/addTodo",
   async (title, { dispatch, rejectWithValue }) => {
      try {
         await axios.post(
            "https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos",
            {
               title,
               isDone: false,
            }
         );

         dispatch(getTodos());
      } catch (error) {
         return rejectWithValue(error.response.data); //dispatch rejected
      }
   }
);

export const deleteTodo = createAsyncThunk(
   "todo/deleteTodo",
   async (todoId, { dispatch, rejectWithValue }) => {
      try {
         await axios.delete(
            `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos/${todoId}`
         );
         dispatch(getTodos());
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
);

export const toggleTodo = createAsyncThunk(
   "todo/toggleTodo",
   async (todo, { dispatch, rejectWithValue }) => {
      try {
         const { id, ...payload } = todo;
         await axios.put(
            `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos/${id}`,
            {
               ...payload,
               isDone: !payload.isDone,
            }
         );
         dispatch(getTodos());
      } catch (error) {
         rejectWithValue(error.response.data);
      }
   }
);



const todoSlice = createSlice({
   name: "todo",
   initialState,

   //chỉ dùng để xử lý các action đồng bộ
   reducers: {
      changeFilter: (state, { payload }) => {
         // redux toolkit hỗ trợ mutate (thay đổi) state trực tiếp mà ko cần phải return về 1 state mới, bằng thư viện immer
         state.filter = payload;
      },

      changeSearch: (state, { payload }) => {
         state.search = payload;
      },
   },

   //dùng để xứ lí các action của createAsyncThunk()
   //Mặc định hàm createAsyncThunk() sẽ tự động tạo ra 3 actions pending/fulfilled/rejected và ta sẽ dùng extraReducers để bắt và xử lí các action đó
   extraReducers: (builder) => {
      // actions: "todo/getTodos/pending"
      builder.addCase(getTodos.pending, (state) => {
         state.isLoading = true;
         state.error = null;
      });
      // actions: "todo/getTodos/fulfilled"
      builder.addCase(getTodos.fulfilled, (state, { payload }) => {
         state.isLoading = false;
         state.todos = payload;
      });
      // actions: "todo/getTodos/rejected"
      builder.addCase(getTodos.rejected, (state, { payload }) => {
         state.isLoading = false;
         state.error = payload;
      });
   },
});



//export actions
export const { changeFilter, changeSearch } = todoSlice.actions;

//export default reducer
export default todoSlice.reducer;
