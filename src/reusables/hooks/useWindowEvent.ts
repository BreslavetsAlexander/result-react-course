import { useEffect } from 'react';

type UseWindowEventArgs = Parameters<typeof window.addEventListener>;

export function useWindowEvent(
  type: UseWindowEventArgs[0],
  listener: UseWindowEventArgs[1],
  options?: UseWindowEventArgs[2],
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);

      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
