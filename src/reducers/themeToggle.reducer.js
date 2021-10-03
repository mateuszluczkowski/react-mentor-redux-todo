import { createSlice } from "@reduxjs/toolkit";
export const themeToggleSlice = createSlice({
   name: "theme",
   initialState: {
      isDarkTheme: false,
      isMobile: true,
   },
   reducers: {
      toggle: (state, action) => {
         if (action.payload === "isDarkTheme")
            state.isDarkTheme = !state.isDarkTheme;
         if (action.payload === "isMobile") state.isMobile = !state.isMobile;
      },
   },
});

export const { toggle } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
