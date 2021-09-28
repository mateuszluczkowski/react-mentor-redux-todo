import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todos.reducer";

export default configureStore({
   reducer: {
      todos: todosReducer,
   },
});
