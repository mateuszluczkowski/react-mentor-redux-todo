import styled from "styled-components";

export const WrapperStyled = styled.div`
   position: relative;
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: center;
   min-height: 100vh;
   margin: 0 auto;
   max-width: ${({ theme }) => theme.layout.desktop}px;
   background: url("${({ isMobile, isDarkTheme, theme }) =>
      theme.background[isDarkTheme ? "dark" : "light"][
         isMobile ? "mobile" : "desktop"
      ]}");
   background-repeat: no-repeat;
   background-position: center top;
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      background-size: 100%;
      padding: 20px;
   }
`;
