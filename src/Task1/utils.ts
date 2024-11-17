import { RefetchParams } from './types';

export const prepareParams = (params: RefetchParams['params']): string => {
  if (!Object.keys(params).length) {
    return '';
  }

  const list = Object.keys(params).reduce<string[]>((result, key) => {
    return [...result, `${key}=${encodeURIComponent(params[key])}`];
  }, []);

  return `?${list.join('&')}`;
};
