import styled from "styled-components";
import newSvg from "../assets/new.svg";
import { BoxProp } from "../types";
import { newBoxes } from "../utils/constants";

const NewsSection = () => {
  return (
    <Container>
      <BoxContainer>
        {newBoxes.map(({ id, title, subHeading }) => (
          <Box key={id} url={newSvg}>
            <BoxData>
              <h2>{title}</h2>
              <h4>{subHeading}</h4>
              <Button>
                <span>Jetzt entdecken!</span>
              </Button>
            </BoxData>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default NewsSection;

const Container = styled.section`
  width: 95%;
  padding: 0 10px;
  margin: 10.5px auto 0;
`;

const BoxContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 0 auto;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div<BoxProp>`
  width: 100%;
  position: relative;
  background-image: url(${({ url }) => `${url}`});
  background-repeat: no-repeat;
  background-position: center center;
  aspect-ratio: 12 / 8;
  background-size: cover;
  :last-child {
    position: relative;
    border: 7px solid transparent;
    background-clip: padding-box;
    padding: 10px;
    transition: 0.5s;
    ::after {
      position: absolute;
      transition: 0.5s;
      top: -7px;
      bottom: -7px;
      left: -7px;
      right: -7px;
      background: linear-gradient(to bottom, #ff8c8c, #fbf65a, #76b3d8);
      content: "";
      z-index: -1;
    }
    :hover {
      border-radius: 20px;
      border: 7px solid transparent;
      ::after {
        background: linear-gradient(to top, #ff8c8c, #fbf65a, #76b3d8);
        border-radius: 20px;
        top: -7px;
        bottom: -7px;
        left: -7px;
        right: -7px;
      }
    }
  }
`;

const BoxData = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50px);
  padding: 0 0 calc(1em + 1vw) calc(1em + 1vw);
  h2,
  h4 {
    text-transform: uppercase;
    color: var(--unnamed-color-707070);
  }
  h2 {
    font-size: calc(1em + 2vw);
    font-weight: 700;
  }
  h4 {
    font-size: calc(1em + 1vw);
    font-weight: 400;
  }
  transition: 0.5s;
  ${Box}:hover & {
    transform: translateY(0);
  }
  @media (max-width: 550px) {
    transform: translateY(35px);
  }
`;

const Button = styled.button`
  margin-top: 10px;
  position: relative;
  border: none;
  background-color: none;
  opacity: 0;
  z-index: 2;
  transition: 0.2s;
  border-radius: 999999px;
  cursor: pointer;
  padding: calc(0.1em + 0.8vw) calc(2em + 1vw);
  span {
    position: relative;
    font-weight: 700;
    color: var(--unnamed-color-707070);
    font-size: calc(0.2em + 1vw);
    z-index: 5;
  }
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #fdfdfd;
    border-radius: 999999px;
    box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.174);
    transition: 0.5s;
    z-index: 3;
  }
  :hover {
    ::after {
      left: -8px;
      right: -8px;
      top: -1px;
      bottom: -1px;
    }
  }
  ${Box}:hover & {
    transition: 0.6s;
    opacity: 1;
  }
  @media (max-width: 850px) {
    span {
      font-size: calc(0.1em + 2vw);
    }
    padding: calc(0.1em + 1.3vw) calc(2em + 1vw);
  }
`;
