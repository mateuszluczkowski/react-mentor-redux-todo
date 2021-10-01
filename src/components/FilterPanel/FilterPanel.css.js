import styled from "styled-components";
export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   padding: 15px 25px;
   align-items: center;
`;

export const DisplayList = styled.ul`
   list-style: none;
   text-align: center;
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
`;
export const Counter = styled.p`
   opacity: 0.55;
   font-size: 14px;
`;
