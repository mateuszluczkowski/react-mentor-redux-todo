import styled from "styled-components";

const TodoWindow = styled.div`
   max-width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-basis: 550px;
   margin-top: 70px;
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      margin-top: 20px;
   }
`;
export default TodoWindow;
