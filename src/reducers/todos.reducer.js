import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
   name: "todos",
   initialState: {
      tasks: [],
      id: 0,
      filter: "all",
   },
   reducers: {
      add: (state, action) => {
         action.payload.id = state.id;
         state.id++;
         action.payload.isChecked = false;
         state.tasks.push(action.payload);
      },
      remove: (state, action) => {
         state.tasks = state.tasks.filter(
            (todo) => todo.id !== action.payload.id
         );
      },
      edit: (state, action) => {
         const index = state.tasks.findIndex(
            (todo) => todo.id === action.payload.id
         );
         state.tasks[index] = action.payload;
      },
      check: (state, action) => {
         const index = state.tasks.findIndex(
            (todo) => todo.id === action.payload.id
         );
         const isChecked = state.tasks[index].isChecked;
         state.tasks[index].isChecked = !isChecked;
      },
      setFilter: (state, action) => {
         state.filter = action.payload.filter;
      },
      replace: (state, action) => {
         state.tasks = action.payload;
      },
   },
});

export const { add, check, edit, remove, setFilter, replace } =
   todoSlice.actions;
export default todoSlice.reducer;
