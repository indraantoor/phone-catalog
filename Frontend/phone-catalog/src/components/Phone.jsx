import styled from "styled-components";

const PhoneContainer = styled.div`
  background-color: #f2ecff;
  width: 250px;
  height: 500px;
  border: 1px solid #f2ecff;
  color: #1e1e1e;
  cursor: pointer;
  &:hover {
    border: 1px solid #4a4a4a;
  }
`;

const ImgContainer = styled.div`
  height: 75%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justfiy-content: space-between;
  height: 100px;
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

const PhoneImgContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Phone = ({ title, price, imgUrl, color }) => {
  return (
    <div>
      <PhoneContainer>
        <ImgContainer>
          <PhoneImgContainer src={imgUrl} alt="Phone" />
        </ImgContainer>
        <InfoContainer>
          <PhoneTitle>{title}</PhoneTitle>
          <Color>Color: {color}</Color>
          <Price>$ {price}</Price>
        </InfoContainer>
      </PhoneContainer>
    </div>
  );
};

export default Phone;
