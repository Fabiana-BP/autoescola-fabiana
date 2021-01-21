import { useEffect } from "react";

export const useScroolToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []); //empty array only is called when the page is loaded.
};
