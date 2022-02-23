import styled from "styled-components";
import Phone from "./Phone";

const PhoneCatalogContainer = styled.div`
  background-color: red;
  height: 100%;
`;

const PhoneCatalogHeading = styled.h1`
  text-align: center;
  padding-top: 30px;
`;

const Wrapper = styled.div`
  background-color: yellow;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 18rem);
  grid-auto-rows: 420px;
  grid-column-gap: 10px;
  justify-content: center;
`;

const PhoneListContainer = () => {
  return (
    <PhoneCatalogContainer>
      <PhoneCatalogHeading>Phone Catalog</PhoneCatalogHeading>
      <Wrapper>
        <Phone />
        <Phone />
        <Phone />
        <Phone />
        <Phone />
        <Phone />
        <Phone />
        <Phone />
      </Wrapper>
    </PhoneCatalogContainer>
  );
};

export default PhoneListContainer;
