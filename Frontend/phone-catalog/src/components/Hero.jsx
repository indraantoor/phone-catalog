import styled from "styled-components";
import HeroImg from "../Assets/HeroImg.jpg";

const HeroContainer = styled.div`
  background-color: #f2ecff;
  height: 450px;
  color: #1e1e1e;
`;

const Wrapper = styled.div`
  //   background-color: red;
  height: 300px;
  display: grid;
  grid-template-columns: 55% 45%;
`;

const Left = styled.div`
  padding-left: 60px;
  padding-top: 80px;
  padding-bottom: 280px;
`;
const Right = styled.div`
  height: 450px;
  object-fit: contain;
`;

const HeroHeading = styled.h1``;

const HeroIntroContainer = styled.div`
  width: 80%;
  margin-top: 10px;
`;

const HeroIntro = styled.p``;

const EmailInput = styled.input`
  border: none;
  padding: 10px;
  margin-top: 20px;
  width: 60%;
  margin-right: 12px;
`;

const SignUpBtn = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #00c896;

  &:active {
    font-size: 12px;
  }
`;

const HeroImgContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
        <Right>
          <HeroImgContainer src={HeroImg} alt="Hero Section" />
        </Right>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
