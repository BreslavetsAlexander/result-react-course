import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Container, Button } from '@mui/material';
import { EpisodesServise } from '../../services/Episodes';
import { EpisodeApiModel } from '../../definitions';
import { ROUTES } from '../../constants/router';

export const Episode: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState<EpisodeApiModel | null>(null);

  useEffect(() => {
    if (typeof id !== 'string') {
      return;
    }

    EpisodesServise.getEpisodeById(Number(id))
      .then(setEpisode)
      .catch(() => {
        navigate(ROUTES.NOT_FOUND);
      });
  }, [id]);

  return (
    <Container maxWidth='xl'>
      <Button onClick={() => navigate(ROUTES.EPISODES)}>back to list</Button>
      <p>{episode?.name}</p>
      <p>{episode?.air_date}</p>
      <p>{episode?.episode}</p>
      <p>{new Date(episode?.created ?? '').toLocaleString()}</p>
    </Container>
  );
};
