import styled from "styled-components";
const Footer = styled.div`
   position: absolute;
   bottom: 50px;
   left: 50%;
   transform: translateX(-50%);
   @media (max-width: ${({ theme }) => theme.layout.mobile}px) {
      font-size: 14px;
   }
`;
export default Footer;
