import styled from "styled-components";
import Phone from "./Phone";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import changePhoneCatalogItems from "../actionCreators/changePhoneCatalogItems";
import Loader from "./Loader";
import changeLoading from "../actionCreators/changeLoading";

const PhoneCatalogContainer = styled.div`
  height: 100%;
`;

const PhoneCatalogHeading = styled.h1`
  text-align: center;
  padding-top: 30px;
  color: #1e1e1e;
`;

const Wrapper = styled.div`
  margin: 30px 60px 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 18rem);
  grid-auto-rows: 500px;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-content: center;
`;

function getPhoneItem(phone) {
  return (
    <Phone
      key={phone.id}
      title={phone.title}
      color={phone.color}
      price={phone.price}
      imgUrl={phone.imgUrl}
      id={phone.id}
    />
  );
}

const PhoneListContainer = () => {
  const isLoading = useSelector((state) => state.loading);
  const phones = useSelector((state) => state.phoneCatalogItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPhones = async () => {
      try {
        dispatch(changeLoading(true));
        const phoneCatalogRes = await axios.get(
          "http://localhost:8080/phones/"
        );
        dispatch(changePhoneCatalogItems(phoneCatalogRes.data));
        dispatch(changeLoading(false));
      } catch (err) {
        dispatch(changeLoading(false));
      }
    };
    getPhones();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PhoneCatalogContainer>
      <PhoneCatalogHeading>Phone Catalog</PhoneCatalogHeading>
      <Wrapper>{phones.map((phone) => getPhoneItem(phone))}</Wrapper>
    </PhoneCatalogContainer>
  );
};

export default PhoneListContainer;
