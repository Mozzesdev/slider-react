import styled from "styled-components";
import { firstBoxes } from "../utils/constants";

const BrandSection = () => {
  return (
    <Container>
      <BoxContainer>
        {firstBoxes.map((box) => (
          <Box key={box}>
            <p>Marke {box}</p>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default BrandSection;

const Container = styled.main`
  padding: 0 10px;
  width: 95%;
  margin: 0 auto;
`;

const BoxContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(121px, 1fr));
  gap: 10px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  width: 100%;
  height: 68px;
  p {
    color: var(--unnamed-color-aaaaaa);
    font-weight: 600;
    font-size: 12px;
  }
`;
