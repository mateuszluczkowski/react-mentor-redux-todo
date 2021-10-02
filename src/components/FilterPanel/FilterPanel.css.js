import styled from "styled-components";
export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   padding: 15px 25px;
   align-items: center;
   border-radius: 0 0 5px 5px;
   box-shadow: 0 0px 80px rgba(0, 0, 0, 0.08);
   background: ${({ theme, isDark }) =>
      isDark ? theme.colors.darkTheme.veryDarkDesaturatedBlue : "white"};
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      flex-basis: 100%;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "counter cleanButton";
   }
`;

export const CleanButton = styled.button`
   opacity: 0.55;
   font-size: 14px;
   background: transparent;
   border: none;
   cursor: pointer;
   text-align: right;
   transition: 0.4s;
   &:hover {
      opacity: 1;
   }
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      grid-area: cleanButton;
   }
`;
export const Counter = styled.p`
   opacity: 0.55;
   font-size: 14px;
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      grid-area: counter;
   }
`;
