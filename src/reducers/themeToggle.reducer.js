import { createSlice } from "@reduxjs/toolkit";
export const themeToggleSlice = createSlice({
   name: "theme",
   initialState: {
      isDark: false,
      isMobile: false,
   },
   reducers: {
      toggle: (state, action) => {
         if (action.payload === "isDark") state.isDark = !state.isDark;
         if (action.payload === "isMobile") state.isMobile = !state.isMobile;
      },
   },
});

export const { toggle } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
