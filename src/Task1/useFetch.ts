import { useEffect, useState } from 'react';
import { RefetchParams } from './types';
import { prepareParams } from './utils';

export const useFetch = <Data, Error>(url: string) => {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = (params: RefetchParams['params'] = {}) => {
    setIsLoading(true);

    fetch(url + prepareParams(params))
      .then((res) => {
        if (res.status !== 200) {
          throw new Error();
        }

        return res.json();
      })
      .then(setData)
      .catch((err) => {
        setError(err);
        setData(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = (refetchParams: RefetchParams) => {
    fetchData(refetchParams.params);
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
