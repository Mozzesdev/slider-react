import { useState, useEffect} from "react";
import { DotsProps, SlideDataProps, SliderProps } from "../types";
import styled from "styled-components";
import useViewPort from "../hooks/useViewPort";
import CarouselHeader from "./CarouselHeader";
import ItemSlide from "./ItemSlide";

const Carousel = ({
  views = 5,
  auto = false,
  data = [],
  delay = 5,
}: SlideDataProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [show, setShow] = useState<number>(views);

  const { width } = useViewPort();

  useEffect(() => {
    if (width <= 1200 && width > 700) return setShow(7);
    if (width <= 700 && width > 350) return setShow(4);
    if (width <= 350) return setShow(2);
    setShow(views);
  }, [width]);

  const condition = selectedIndex * show >= data.length - show;

  const nextIndex = () => {
    if (condition) return setSelectedIndex(0);
    setSelectedIndex((prev: number) => prev + 1);
  };

  useEffect(() => {
    if (auto) {
      const autoPlay = setInterval(nextIndex, delay * 1000);
      return () => clearInterval(autoPlay);
    }
  }, [nextIndex]);

  return (
    <>
      <CarouselHeader
        imp={{
          func: nextIndex,
          data: condition,
        }}
      />
      <Container onClick={nextIndex}>
        <Slider selected={selectedIndex}>
          {data.map(({ data }) => (
            <ItemSlide key={data.id} data={data} views={show} />
          ))}
        </Slider>
        <Dots onClick={(e: any) => e.stopPropagation()}>
          {new Array(Math.ceil(data.length / show)).fill("a").map((d, i) => (
            <CircleDots
              i={i}
              sidx={selectedIndex}
              onClick={() => setSelectedIndex(i)}
              key={i}
            />
          ))}
        </Dots>
      </Container>
    </>
  );
};

export default Carousel;

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-x: hidden;
`;

const Slider = styled.div<SliderProps>`
  display: flex;
  cursor: pointer;
  width: 100%;
  transition: 1s ease-in-out;
  transform: ${({ selected }) => `translateX(-${selected * 100}%)`};
  gap: 0.5%;
`;

const Dots = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

const CircleDots = styled.div<DotsProps>`
  width: 0.6em;
  height: 0.6em;
  transition: all 0.4s;
  background-color: ${({ i, sidx }) => (i === sidx ? "#5d5d5d" : "#bdbdbd")};
  border-radius: 50%;
  cursor: pointer;
`;
