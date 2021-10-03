import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: 25px;
   border-radius: 5px 5px 0 0;
   flex-basis: 100%;
   background: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.darkTheme.veryDarkDesaturatedBlue : "white"};
`;

export const Message = styled.div`
   padding: 16px 20px;
   flex-basis: 100%;
   text-align: center;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   opacity: 0.6;
`;
