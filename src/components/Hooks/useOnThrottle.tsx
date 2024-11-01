import { useRef, useCallback } from 'react';

function useOnThrottle<T extends (...args: any[]) => void>(callback: T, delay: number): T {
  const lastCall = useRef<number>(0);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall.current >= delay) {
      callback(...args);
      lastCall.current = now;
    }
  }, [callback, delay]) as T;
}

export default useOnThrottle;
