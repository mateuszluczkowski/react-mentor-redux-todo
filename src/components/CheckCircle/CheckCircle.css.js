import styled from "styled-components";
import { iconCheck } from "assets/images";

export const Circle = styled.div`
   text-align: center;
   line-height: 25px;

   margin: 0 20px;
   width: 25px;
   height: 25px;
   border-radius: 50%;
   border: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;
   transition: 0.4s;
   ${({ isChecked, theme }) =>
      isChecked
         ? `background:${theme.colors.primary.checkBackground.background};
      border:0px;`
         : null}
`;
export const CheckIcon = styled.img.attrs(() => ({
   src: iconCheck,
}))`
   user-select: none;
`;
