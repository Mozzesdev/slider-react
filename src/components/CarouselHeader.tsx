import styled from "styled-components";
import { ArrowProps } from "../types";

const CarouselHeader = ({ imp }: any) => {
  return (
    <Header>
      <h2>Kategorien</h2>
      <LeftArrow onClick={imp.func} impdata={imp.data}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </LeftArrow>
    </Header>
  );
};

export default CarouselHeader;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: calc(1.3em + 1vw);
    text-transform: uppercase;
    color: var(--unnamed-color-707070);
  }
`;

const LeftArrow = styled.div<ArrowProps>`
  cursor: pointer;
  transition: all 0.8s;
  position: relative;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  align-self: flex-end;
  transform: rotateY(${({ impdata }) => impdata && '180'}deg);
  .arrow-top,
  .arrow-bottom {
    background-color: #9d9d9d;
    height: 2px;
    width: 100%;
    inset: 0;
    position: absolute;
  }
  .arrow-top {
    transform: rotate(45deg);
    transform-origin: bottom right;
  }
  .arrow-bottom {
    transform: rotate(-45deg);
    transform-origin: top right;
  }
`;
