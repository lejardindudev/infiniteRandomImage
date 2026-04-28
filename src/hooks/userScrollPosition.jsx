import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);
  const handleScroll = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    );
    const viewportHeight = window.innerHeight;
    const scrollHeight = window.scrollY;
    setIsBottom(viewportHeight + scrollHeight >= documentHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isBottom };
}
