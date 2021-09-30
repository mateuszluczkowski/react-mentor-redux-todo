import styled from "styled-components";

import { iconCross } from "assets/images";

export const Wrapper = styled.div`
   display: flex;
   padding: 16px 20px;
   align-items: center;
   justify-content: flex-end;
   flex-basis: 100%;
   max-width: 550px;
   overflow: hidden;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;
`;
export const Text = styled.p`
   display: block;
   flex-grow: 1;
   ${({ isChecked, isDark }) => {
      if (isChecked) {
         if (isDark) return "text-decoration: line-through; opacity:0.2";
         else return "text-decoration: line-through;opacity:0.2";
      }
   }};
`;
export const CrossIcon = styled.img.attrs(() => ({
   src: iconCross,
}))`
   transition: 0.4s;
   ${({ isDisplayed }) =>
      isDisplayed ? "opacity:1;" : "opacity:0; pointer-events: none; "}
`;
