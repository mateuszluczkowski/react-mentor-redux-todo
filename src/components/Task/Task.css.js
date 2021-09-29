import styled from "styled-components";

import { iconCross } from "assets/images";

export const Wrapper = styled.div`
   display: flex;
   padding: 18px 20px;
   align-items: center;
   justify-content: flex-end;
   flex-basis: 100%;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   ${({ isChecked }) =>
      isChecked
         ? `text-decoration: line-through; color: rgba(0, 0, 0, 0.2);`
         : null}
   cursor:pointer;
`;
export const Text = styled.p`
   display: block;
   flex-grow: 1;
`;
export const CrossIcon = styled.img.attrs(() => ({
   src: iconCross,
}))`
   transition: 0.4s;
   ${({ isDisplayed }) =>
      isDisplayed ? "opacity:1;" : "opacity:0; pointer-events: none; "}
`;
