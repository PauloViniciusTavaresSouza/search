import { useRef } from 'react';

export default function useDebounce(fn, delay) {
  const timoutRef = useRef(null);

  function debouncedFn(...args) {
    window.clearTimeout(timoutRef.current);
    timoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, [delay]);
  }
  return debouncedFn;
}
