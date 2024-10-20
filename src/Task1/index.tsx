import { FC } from 'react';
import { useFetch } from './useFetch';
import { Post } from './types';

export const Task1: FC = () => {
  const { data, isLoading, error, refetch } = useFetch<Post[], Error>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return (
    <div>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data?.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};
