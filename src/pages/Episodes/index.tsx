import { FC, useEffect, useState } from 'react';
import { useSearchParams, URLSearchParamsInit, generatePath, useNavigate } from 'react-router';
import {
  Container,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TableSortLabel,
} from '@mui/material';
import { EpisodesServise } from '../../services/Episodes';
import { EpisodesListPayload } from '../../services/Episodes/types';
import { EpisodeApiModel, SortOrder } from '../../definitions';
import { ROUTES } from '../../constants/router';
import { useSortOrder } from '../hooks';

export const Episodes: FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeApiModel[]>([]);
  const [episodesSort, setEpisodesSort] = useState<EpisodesListPayload['sort']>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [createdColumnSortOrder, updateCreatedColumnSortOrder] = useSortOrder(
    (searchParams.get('created') as SortOrder) ?? undefined,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const payload: EpisodesListPayload = {};

    if (episodesSort) {
      payload.sort = episodesSort;
    }

    EpisodesServise.getEpisodes(payload).then(setEpisodes);
  }, [createdColumnSortOrder]);

  const toggleCreatedColumnSortOrder = () => {
    const newCreatedColumnSortOrder = updateCreatedColumnSortOrder();

    const createdSort = {
      created: newCreatedColumnSortOrder,
    };

    setEpisodesSort(createdSort);
    setSearchParams(createdSort as URLSearchParamsInit);
  };

  const onEpisodeRowClick = (episode: EpisodeApiModel) => {
    navigate(
      generatePath(ROUTES.EPISODE, {
        id: episode.id,
      }),
    );
  };

  return (
    <Container maxWidth='xl'>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Air Date</TableCell>
              <TableCell>Episode</TableCell>
              <TableCell>
                <TableSortLabel
                  direction={createdColumnSortOrder}
                  onClick={toggleCreatedColumnSortOrder}
                />
                <span>Created</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((episode) => {
              return (
                <TableRow key={episode.id} onClick={() => onEpisodeRowClick(episode)}>
                  <TableCell>{episode.name}</TableCell>
                  <TableCell>{episode.air_date}</TableCell>
                  <TableCell>{episode.episode}</TableCell>
                  <TableCell>{new Date(episode.created).toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
