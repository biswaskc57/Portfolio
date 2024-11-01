import { RefObject, useEffect, useState, useCallback } from 'react';
import useOnDebounceCallback from './useOnDebounce';

const useScrollOn = (ref: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);


  console.log("check:");
  console.log("Scroll:", scrollY);

  // Debounce scroll handler with useCallback
  const debouncedHandleScroll = useOnDebounceCallback(
    useCallback(() => {
      console.log("here");
      setScrollY(window.scrollY);
    }, []), // Only initialize once
    1000
  );

  // Debounced version of setIsVisible for IntersectionObserver
  const debouncedSetIsVisible = useOnDebounceCallback(
    useCallback((isIntersecting: boolean) => {
      console.log("setIsVisible:", isIntersecting);
      setIsVisible(isIntersecting);
    }, []), // Only initialize once
    1000
  );

  useEffect(() => {
    console.log("Setting up scroll listener");

    // Attach scroll listener
    window.addEventListener('scroll', debouncedHandleScroll);

    // Cleanup scroll listener on unmount
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        debouncedSetIsVisible(entry.isIntersecting);
      });
    },
    [debouncedSetIsVisible] // Depend on stable debouncedSetIsVisible
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 1],
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, handleIntersection]);

  return isVisible;
};

export default useScrollOn;
