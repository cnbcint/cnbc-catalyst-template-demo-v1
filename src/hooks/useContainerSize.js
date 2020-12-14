import { useState, useRef, useEffect } from "react";

export default function useContainerSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef();
  const onWindowSize = () => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  };
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
    window.addEventListener("resize", onWindowSize);
    return () => {
      window.removeEventListener("resize", onWindowSize);
    };
  }, []);
  return { ref, width, height };
}
