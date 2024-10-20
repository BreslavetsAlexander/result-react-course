import { useEffect, useState } from 'react';
import { RefetchParams } from './types';
import { prepareParams } from './utils';

export const useFetch = <Data, Error>(url: string) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = (paramsStr: string) => {
    setIsLoading(true);

    fetch(url + paramsStr)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error();
        }

        return res.json();
      })
      .then(setData)
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData('');
  }, []);

  const refetch = (refetchParams: RefetchParams) => {
    fetchData(prepareParams(refetchParams.params));
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
