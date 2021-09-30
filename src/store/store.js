import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../reducers/todos.reducer";
import themeToggleReducer from "../reducers/themeToggle.reducer";

export default configureStore({
   reducer: {
      todos: todosReducer,
      themeToggle: themeToggleReducer,
   },
});
