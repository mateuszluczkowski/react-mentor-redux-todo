import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: center;
   min-height: 100vh;
   margin: 0 auto;
   width: ${({ theme }) => theme.layout.desktop};
   background: url("${({ isMobile, isDark, theme }) =>
      theme.background[isDark ? "dark" : "light"][
         isMobile ? "mobile" : "desktop"
      ]}");
   background-repeat: no-repeat;
   background-position: center top;
`;
export default Wrapper;
