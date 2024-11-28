import { useRef, useEffect, useState } from "react";
import { useLenis } from 'lenis/react';

const useCustomLenisScroll = (customDuration = 1) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (container.current) {
      observer.observe(container.current);
    }

    return () => {
      if (container.current) {
        observer.unobserve(container.current);
      }
    };
  }, []);

  const lenis = useLenis();

  const initialDuration = 1;

  useEffect(() => {
    if (!lenis) return; 

    const handleScroll = () => {
      if (isVisible) {
        lenis.options.duration = customDuration;
      } else {
        lenis.options.duration = initialDuration;
      }
    };

    lenis.on('scroll', handleScroll);
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [isVisible, lenis, customDuration, initialDuration]);

  return {
    container,
    isVisible
  };
};

export default useCustomLenisScroll;
