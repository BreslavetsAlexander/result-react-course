import { RefetchParams } from './types';

export const prepareParams = (params: RefetchParams['params']): string => {
  const list = Object.keys(params).reduce<string[]>((result, key) => {
    return [...result, `${key}=${encodeURIComponent(params[key])}`];
  }, []);

  return `?${list.join('&')}`;
};
