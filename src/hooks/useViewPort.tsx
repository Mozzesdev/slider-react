import { useState, useEffect } from "react";
import { ViewTypes } from "../types";


const useViewPort = (): ViewTypes => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateView = () => {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      setWidth(width);
      setHeight(height);
    };
    updateView();
    window.addEventListener("resize", updateView);

    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  return { width, height };
};

export default useViewPort;
