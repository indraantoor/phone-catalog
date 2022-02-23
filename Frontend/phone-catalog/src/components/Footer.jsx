import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const LogoTitle = styled.h1`
  font-weight: bold;
  cursor: pointer;
  margin-left: 50px;
  color: #f2ecff;
`;

const Copyright = styled.p`
  font-size: 12px;
  margin-right: 60px;
  color: #f2ecff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoTitle>Phone Catalog</LogoTitle>
      <Copyright>Copyright (c) 2022 - Indraan S Toor</Copyright>
    </FooterContainer>
  );
};

export default Footer;
