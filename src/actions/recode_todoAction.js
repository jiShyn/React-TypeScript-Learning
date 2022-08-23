import axios from "axios";

const FILTER_MAPPING = {
   active: false,
   done: true,
   all: undefined,
};

export const getTodos = () => {
   return async (dispatch, getState) => {
      try {
         const { filter, search } = getState().todo_Recode;

         dispatch({ type: "getTodos/pending" });

         const { data } = await axios.get(
            "https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos",
            {
               params: {
                  isDone: FILTER_MAPPING[filter],
                  title: search,
               },
            }
         );
         dispatch({ type: "getTodos/fulfilled", data });
      } catch (error) {
         dispatch({ type: "getTodos/rejected", error: error.response.data });
      }
   };
};

export const addTodo = (title, callback) => {
   return async (dispatch, getState) => {
      try {
         await axios.post(
            "https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos",
            { title, isDone: false }
         );

         dispatch(getTodos());
         callback();
      } catch (error) {
         console.log(error);
      }
   };
};

export const deleteTodo = (todoId) => {
   return async (dispatch, getState) => {
      try {
         await axios.delete(
            `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos/${todoId}`
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
            `https://6299dac16f8c03a9784b5a5e.mockapi.io/api/Todos/${id}`,
            { ...payload, isDone: !payload.isDone }
         );

         dispatch(getTodos());
      } catch (error) {
         console.log(error);
      }
   };
};

export const changeFilter = (filter) => {
   return { type: "changeFilter", filter };
};

export const searchTodo = (title) => {
   return { type: "searchTodo", title };
};
