import { useEffect, useState, useCallback } from 'react';
import useOnThrottle from './useOnThrottle';

const useScrollOn = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  // Throttle scroll handler to immediately update scrollY
  const throttledHandleScroll = useOnThrottle(
    useCallback(() => {
      setScrollY(window.scrollY);
    }, []),
    100 // Adjust this as needed for responsiveness
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
