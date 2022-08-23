import axios from "axios";
import * as actionTypes from "../constants/todoConstants";

// Mặc định redux chỉ cho phép action là một plain object
// dispatch({type: "DO_SOMETHING"})

// const doSomething = () => {
//   return {
//     type: "DO_SOMETHING"
//   }
// }
// dispatch(doSomething())

const FILTER_MAPPING = {
   active: false,
   done: true,
   all: undefined,
};

// Tuy nhiên khi sử dụng một thư viện middleware của redux là redux-thunk thì nó cho phép ta viết các action là một function
// Cách sử dụng: dispatch(getTodos())
export const getTodos = () => {
   // thunk action nhận vào 2 tham số là dispatch và getState
   return async (dispatch, getState) => {
      try {
         const { filter, search } = getState().todo;

         // dispatch action pending
         dispatch({ type: actionTypes.GET_TODOS_PENDING});
         // Call API
         const { data } = await axios.get(
            "https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos",
            {
               params: {
                  isDone: FILTER_MAPPING[filter],
                  title: search,
               },
            }
         );
         // Thành công
         dispatch({ type: actionTypes.GET_TODOS_FULFILLED, data });
      } catch (error) {
         //Thất bại/API bị lỗi
         // error.response.data là format của axios
         dispatch({ type: actionTypes.GET_TODOS_REJECTED, error: error.response.data });
      }
   };
};

export const addTodo = (title, callback) => {
   return async (dispatch) => {
      try {
         // Call API thêm todo
         await axios.post(
            "https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos",
            { title, isDone: false }
         );
         //dispatch action getTodos để call API danh sách todos sau khi thêm danh sách và set lại state trong store
         dispatch(getTodos());
         //Gọi hàm callback sau khi thêm thành công
         callback();
      } catch (error) {}
   };
};

export const deleteTodo = (todoId) => {
   return async (dispatch) => {
      try {
         await axios.delete(
            `https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos/${todoId}`
         );

         dispatch(getTodos());
      } catch (error) {
         console.log(error);
      }
   };
};

export const toggleTodo = (todo) => {
   return async (dispatch) => {
      try {
         const { id, ...payload } = todo;
         await axios.put(
            `https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos/${id}`,
            { ...payload, isDone: !payload.isDone }
         );

         dispatch(getTodos());
      } catch (error) {
         console.log(error);
      }
   };
};

export const changeFilter = (filter) => {
   return {
      type: actionTypes.CHANGE_FILTER,
      filter,
   };
};

export const changeSearch = (search) => {
   return {
      type: actionTypes.CHANGE_SEARCH,
      search,
   };
};
