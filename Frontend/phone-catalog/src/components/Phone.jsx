import styled from "styled-components";

const PhoneContainer = styled.div`
  background-color: grey;
  width: 250px;
  height: 400px;
`;

const ImgContainer = styled.div`
  background-color: blue;
  height: 75%;
`;

const InfoContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

const PhoneTitle = styled.h1`
  font-size: 18px;
  font-weight: 800;
`;

const Price = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

const Color = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

const Phone = () => {
  return (
    <div>
      <PhoneContainer>
        <ImgContainer>
          <PhoneTitle>Phone1</PhoneTitle>
        </ImgContainer>
        <InfoContainer>
          <PhoneTitle>Apple iPhone 7</PhoneTitle>
          <Color>Color: Blue</Color>
          <Price>$499</Price>
        </InfoContainer>
      </PhoneContainer>
    </div>
  );
};

export default Phone;
