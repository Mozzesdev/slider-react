type boxData = {
  image: string;
  title: string;
  id: number;
};

interface newBoxesData {
  id: number | string;
  title: string;
  subHeading: string;
}

interface boxSliderData {
  data: boxData;
}

interface ArrowProps {
  impdata: boolean;
}

interface SlideProps {
  views: number;
}

interface BoxProp {
  url: string;
}

interface ViewTypes {
  width: number;
  height: number;
}

interface SlideDataProps {
  views?: number;
  auto?: boolean;
  data?: boxSliderData[];
  delay?: number;
}

interface SliderProps {
  selected: number;
}

interface DotsProps {
  i: number;
  sidx: number;
}

export {
  DotsProps,
  SliderProps,
  SlideDataProps,
  ArrowProps,
  ViewTypes,
  boxSliderData,
  newBoxesData,
  BoxProp,
  SlideProps,
};
