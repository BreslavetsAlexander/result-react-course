import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Container, Button } from '@mui/material';
import { LocationsServise } from '../../services/Locations';
import { LocationApiModel } from '../../definitions';
import { ROUTES } from '../../constants/router';

export const Location: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState<LocationApiModel | null>(null);

  useEffect(() => {
    if (typeof id !== 'string') {
      return;
    }

    LocationsServise.getLocationById(Number(id))
      .then(setLocation)
      .catch(() => {
        navigate(ROUTES.NOT_FOUND);
      });
  }, [id]);

  return (
    <Container maxWidth='xl'>
      <Button onClick={() => navigate(ROUTES.LOCATIONS)}>back to list</Button>
      <p>{location?.name}</p>
      <p>{location?.type}</p>
      <p>{location?.dimension}</p>
      <p>{new Date(location?.created ?? '').toLocaleString()}</p>
    </Container>
  );
};
