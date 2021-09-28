import styled from "styled-components";
import { iconMoon, iconSun } from "assets/images";

export const Wrapper = styled.div`
   flex-basis: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 50px;
`;
export const ThemeButton = styled.button`
   background: transparent;
   border: none;
   cursor: pointer;
`;
export const Title = styled.h1`
   color: white;
   text-transform: uppercase;
   font-size: 40px;
   flex-grow: 1;
   letter-spacing: 15px;
`;
export const ThemeIcon = styled.img.attrs(({ isDark }) => ({
   src: isDark ? iconSun : iconMoon,
}))``;
