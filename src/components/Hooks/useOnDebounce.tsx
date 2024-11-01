import { useCallback, useRef } from 'react';

// Make the callback generic to allow parameters
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOnDebounceCallback = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const timeoutRef = useRef<number | undefined>();

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};

export default useOnDebounceCallback;