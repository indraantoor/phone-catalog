import styled from "styled-components";
import Phone from "./Phone";
import { useEffect, useState } from "react";
import axios from "axios";

const PhoneCatalogContainer = styled.div`
  height: 100%;
`;

const PhoneCatalogHeading = styled.h1`
  text-align: center;
  padding-top: 30px;
  color: #1e1e1e;
`;

const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 18rem);
  grid-auto-rows: 500px;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-content: center;
`;

const PhoneListContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getPhones = async () => {
      try {
        const phoneCatalogRes = await axios.get(
          "http://localhost:8080/phones/"
        );
        setPhones(phoneCatalogRes.data);
        setLoading(false);
      } catch (err) {}
    };
    getPhones();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(phones);

  return (
    <PhoneCatalogContainer>
      <PhoneCatalogHeading>Phone Catalog</PhoneCatalogHeading>
      <Wrapper>
        {phones.map(function displayPhoneInformation(phone) {
          return (
            <Phone
              key={phone.id}
              title={phone.title}
              color={phone.color}
              price={phone.price}
              imgUrl={phone.imgUrl}
            />
          );
        })}
      </Wrapper>
    </PhoneCatalogContainer>
  );
};

export default PhoneListContainer;
