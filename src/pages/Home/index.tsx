import { FC } from 'react';
import { Typography, Container } from '@mui/material';

export const Home: FC = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>
        Welcome to the interactive application based on the popular Rick and Morty universe
      </Typography>
    </Container>
  );
};
