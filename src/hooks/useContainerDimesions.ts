import { useState, useEffect, LegacyRef, MutableRefObject } from "react";

const useContainerDimensions = (
  myRef: MutableRefObject<HTMLUListElement> | LegacyRef<HTMLUListElement>
) => {
  const [dimensions, setDimensions] = useState({ width: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      // @ts-ignore
      width: myRef.current.offsetWidth,
    });
    const handleResize = () => {
      setDimensions(getDimensions());
    };
    // @ts-ignore
    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // @ts-ignore
  }, [myRef.current]);

  return dimensions;
};

export default useContainerDimensions;
