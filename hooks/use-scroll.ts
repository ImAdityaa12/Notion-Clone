import { useEffect, useState } from "react";

export const useScroll = (thresold = 10) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > thresold) {
        setIsScrolled(true);
        // console.log(window.scrollY);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [thresold]);
  return isScrolled;
};
