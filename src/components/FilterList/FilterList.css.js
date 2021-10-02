import styled from "styled-components";
export const Wrapper = styled.ul`
   list-style: none;
   text-align: center;
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      flex-basis: 100%;
      padding: 15px 25px;
      border-radius: 5px;
      margin: 15px 0;
      box-shadow: 80px 0px 80px rgb(0 0 0 / 8%);
      background: ${({ theme, isDark }) =>
         isDark ? theme.colors.darkTheme.veryDarkDesaturatedBlue : "white"};
   }
`;
export const ListItem = styled.li`

   display: inline;
   margin: 10px;
   font-size: 14px;
   font-weight: 700;
   cursor: pointer;
   opacity: 0.55;
   transition: 0.4s;
   &:hover {
      opacity: 1;
   }
   
     ${({ active, theme: { colors } }) =>
        active ? `color: ${colors.primary.brightBlue}; opacity: 1;` : null}
   }
`;
