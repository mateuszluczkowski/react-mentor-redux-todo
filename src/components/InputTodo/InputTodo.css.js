import styled from "styled-components";

export const Form = styled.form`
   display: flex;
   padding: 0 20px;
   justify-content: center;
   align-items: center;
   width: 100%;
   border-radius: 5px;
   background: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.darkTheme.veryDarkDesaturatedBlue : "white"};
`;
export const Input = styled.input.attrs(() => ({
   placeholder: "Create a new todo...",
}))`
   padding: 22px 0;
   height: 100%;
   border: none;
   background: transparent;
   flex-grow: 1;
   &:focus {
      outline: none;
   }
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      padding: 18px 0;
   }
`;
