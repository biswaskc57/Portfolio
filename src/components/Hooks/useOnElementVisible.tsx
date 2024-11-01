import { RefObject, useEffect, useState, useCallback } from 'react';
import useOnThrottle from './useOnThrottle';
const useOnElementVisible = (ref: RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer callback
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Update visibility state only if it changes
        if (entry.isIntersecting !== isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      });
    },
    [isVisible] // Depend on isVisible to check if the state has changed
  );

  // Throttle the callback to limit how often it is executed
  const throttledHandleIntersection = useOnThrottle(handleIntersection, 100); // Adjust delay as needed

  useEffect(() => {
    // Set up the Intersection Observer only once when the component mounts
    const observer = new IntersectionObserver(throttledHandleIntersection, {
      threshold: 0.1, // Trigger the callback when 10% of the target is visible
    });

    // Observe the current element if it exists
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [throttledHandleIntersection]);

  return isVisible; // Return the visibility state of the element
};

export default useOnElementVisible;
