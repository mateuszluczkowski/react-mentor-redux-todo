import styled from "styled-components";

import { iconCross } from "assets/images";

export const Wrapper = styled.div`
   display: flex;
   padding: 0 20px;
   align-items: center;
   justify-content: flex-end;
   flex-basis: 100%;
   max-width: 550px;
   overflow: hidden;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;
   background: ${({ theme, isDark }) =>
      isDark ? theme.colors.darkTheme.veryDarkDesaturatedBlue : "white"};
`;
export const Text = styled.div.attrs(({ id }) => ({
   id,
}))`
   display: flex;
   align-items: center;
   flex-grow: 1;
   height: 100%;
   padding: 18px 0;
   ${({ isChecked, isDark }) => {
      if (isChecked) {
         if (isDark) return "text-decoration: line-through; opacity:0.2";
         else return "text-decoration: line-through;opacity:0.2";
      }
   }};
   user-select: none;
`;
export const CrossIcon = styled.img.attrs(() => ({
   src: iconCross,
}))`
   padding: 10px;
   transition: 0.4s;
   cursor: pointer;
   ${({ isDisplayed }) =>
      isDisplayed ? "opacity: 1;" : "opacity: 0; pointer-events: none; "}
`;
