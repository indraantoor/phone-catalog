import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
  height: 350px;
`;

const Heading = styled.h1`
  padding-top: 40px;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <Heading>Error</Heading>
    </ErrorContainer>
  );
};

export default Error;
