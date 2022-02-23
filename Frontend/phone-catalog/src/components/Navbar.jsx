import styled from "styled-components";

const NavbarContainer = styled.nav`
  height: 60px;
  background-color: black;
  color: white;
`;

const Wrapper = styled.div`
  padding: 2px 20px;
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
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
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
          <LogoTitle>Phone Catalog</LogoTitle>
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