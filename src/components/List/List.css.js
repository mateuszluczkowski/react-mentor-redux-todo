import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin: 25px 0;
   flex-basis: 100%;
   border-radius: 5px;
   box-shadow: 0 0px 80px rgba(0, 0, 0, 0.08);
   background: ${({ theme, isDark }) =>
      isDark ? theme.colors.darkTheme.veryDarkDesaturatedBlue : "white"};
`;

export const Message = styled.div`
   padding: 16px 20px;
   flex-basis: 100%;
   text-align: center;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
