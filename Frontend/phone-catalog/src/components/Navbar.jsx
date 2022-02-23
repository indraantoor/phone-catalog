import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  height: 60px;
  background-color: #1e1e1e;
  color: white;
`;

const Wrapper = styled.div`
  padding: 2px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  font-size: 24px;
  flex: 2;
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;

  @media (max-width: 722px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          <Link to="/">
            <LogoTitle>Phone Catalog</LogoTitle>
          </Link>
        </Left>
        <Right>
          <MenuItem>Home</MenuItem>
          <MenuItem>Phones</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </Right>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
