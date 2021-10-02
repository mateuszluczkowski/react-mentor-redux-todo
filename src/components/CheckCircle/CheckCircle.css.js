import styled from "styled-components";
import { iconCheck } from "assets/images";

export const Circle = styled.p`
   z-index: 1;
   background: transparent;
   position: relative;
   text-align: center;
   line-height: 25px;
   margin-right: 20px;
   min-width: 25px;
   min-height: 25px;
   border-radius: 50%;
   cursor: pointer;
   transition: 0.4s;
   border: ${({ theme, isDark }) =>
      isDark
         ? "1px solid rgba(255, 255, 255, 0.15)"
         : "1px solid rgba(0, 0, 0, 0.15)"};

   ${({ isChecked, theme }) =>
      isChecked
         ? `background:${theme.colors.primary.checkBackground.background};
      border:0px;`
         : null}

   ${({ id }) => (id === undefined ? " cursor:unset;" : null)}
   user-select: none;
   &:hover {
      border: ${({ theme, isDark }) =>
         isDark
            ? "1px solid rgba(255, 255, 255, 0.35)"
            : "1px solid rgba(0, 0, 0, 0.35)"};
   }
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      width: 20px;
      height: 20px;
   }
`;
export const CheckIcon = styled.img.attrs(() => ({
   src: iconCheck,
}))`
   user-select: none;
`;
