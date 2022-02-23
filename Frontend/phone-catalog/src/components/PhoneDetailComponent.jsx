import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import changeCatalogItem from "../actionCreators/changeCatalogItem";
import axios from "axios";
import Error from "./Error";
import Loader from "./Loader";
import changeLoading from "../actionCreators/changeLoading";

const PhoneDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 30px;
  color: #1e1e1e;
`;

const Left = styled.div`
  margin-top: 50px;
  margin-left: 60px;
  height: 450px;
  width: 70%;
  object-fit: contain;
`;

const PhoneImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  margin-top: 50px;
  margin-right: 60px;
`;

const PhoneTitle = styled.h1`
  padding-bottom: 20px;
`;

const Description = styled.p`
  padding-bottom: 20px;
`;

const Color = styled.h2`
  font-weight: 300;
  padding-bottom: 20px;
`;

const Price = styled.h2`
  font-weight: 500;
  padding-bottom: 20px;
`;

const BuyNowBtn = styled.button`
  padding: 15px;
  width: 30%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #00c896;
  font-size: 18px;

  &:active {
    font-size: 17px;
  }
`;

const PhoneDetailComponent = () => {
  const [isError, setError] = useState(false);
  const isLoading = useSelector((state) => state.loading);
  const { id } = useParams();
  const phone = useSelector((state) => state.catalogItem);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPhones = async () => {
      try {
        dispatch(changeLoading(true));
        const phoneCatalogRes = await axios.get(
          `http://localhost:8080/phones/${id}`
        );
        dispatch(changeCatalogItem(phoneCatalogRes.data));
        dispatch(changeLoading(false));
      } catch (err) {
        setError(true);
        dispatch(changeLoading(false));
      }
    };
    getPhones();
  }, [dispatch, id]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PhoneDetailContainer>
      <Left>
        <PhoneImg src={phone.imgUrl} />
      </Left>
      <Right>
        <PhoneTitle>{phone.title}</PhoneTitle>
        <Description>{phone.description}</Description>
        <Color>Color: {phone.color}</Color>
        <Price>$ {phone.price}</Price>
        <BuyNowBtn>Buy Now</BuyNowBtn>
      </Right>
    </PhoneDetailContainer>
  );
};

export default PhoneDetailComponent;
