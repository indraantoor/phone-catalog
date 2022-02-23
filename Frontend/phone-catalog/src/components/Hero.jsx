import styled from "styled-components";

const HeroContainer = styled.div`
  background-color: #f2ecff;
  height: 450px;
  color: #1e1e1e;
`;

const Wrapper = styled.div`
  //   background-color: red;
  height: 300px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  padding-left: 60px;
  padding-top: 90px;
  padding-bottom: 280px;
`;
const Right = styled.div`
  flex: 1;
  background-color: yellow;
`;

const HeroHeading = styled.h1``;

const HeroIntroContainer = styled.div`
  width: 550px;
  margin-top: 10px;
`;

const HeroIntro = styled.p``;

const EmailInput = styled.input`
  border: none;
  padding: 10px;
  margin-top: 20px;
  width: 350px;
`;

const SignUpBtn = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #00c896;
  color: ;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <Left>
          <HeroHeading>Get All The Information About Phones</HeroHeading>
          <HeroHeading>At One Place</HeroHeading>
          <HeroIntroContainer>
            <HeroIntro>
              Latest and updated prices about phones at one place. Subscribe to
              get the latest news and information about your favorite phones in
              your mail.
            </HeroIntro>
          </HeroIntroContainer>
          <EmailInput placeholder="Sign up for newsletter" />
          <SignUpBtn>Subscribe Us!</SignUpBtn>
        </Left>
        <Right>Hello</Right>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
