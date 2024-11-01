import { useEffect, useState, useCallback } from 'react';
import useOnThrottle from './useOnThrottle';

const useScrollOn = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  // Throttle scroll handler with useCallback
  const throttledHandleScroll = useOnThrottle(
    useCallback(() => {
      setScrollY(window.scrollY);
    }, []), // Only initialize once
    1000 // Adjust the throttle delay as needed
  );

  useEffect(() => {
    // Attach scroll listener
    window.addEventListener('scroll', throttledHandleScroll);

    // Cleanup scroll listener on unmount
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [throttledHandleScroll]);

  return scrollY;
};

export default useScrollOn;
