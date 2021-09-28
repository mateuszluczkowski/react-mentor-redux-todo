import styled from "styled-components";
export const Wrapper = styled.div`
   display: flex;
   padding: 18px 0;
   align-items: center;
   flex-basis: 100%;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   ${({ isChecked }) =>
      isChecked
         ? `text-decoration: line-through; color: rgba(0, 0, 0, 0.2);`
         : null}
`;
