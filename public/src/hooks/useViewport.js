import { createEffect, createSignal } from "solid-js";

const useViewport = () => {
  const [width, setWidth] = createSignal(window.innerWidth);

  createEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width();
};

export default useViewport;