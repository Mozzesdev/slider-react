import { memo } from "react";
import styled from "styled-components";
import { SlideProps } from "../types";

const ItemSlide = ({ data, views }: any) => {
  return (
    <Slide views={views}>
      <img src={data.image} alt="Image slider" />
      <h4>{data.title}</h4>
    </Slide>
  );
};

export default memo(
  ItemSlide,
  (prevProps, nextProps) => prevProps === nextProps
);

const Slide = styled.div<SlideProps>`
  flex: 0 0 calc(${({ views }) => 100 / views}% - 0.5%);
  max-width: calc(${({ views }) => 100 / views}% - 0.5%);
  padding: 0.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  transition: 0.3s;
  img {
    border-radius: 50%;
    padding: calc(1em + 0.5vw);
    background-color: #f5f5f5;
    max-width: 160px;
    width: 80%;
    height: auto;
  }
  h4 {
    margin-top: 10px;
    text-align: center;
    font-size: calc(1em + 0.1vw);
    font-weight: 700;
    color: #535353;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
