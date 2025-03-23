import { FC } from 'react';
import { Container, Typography, Box } from '@mui/material';

export const NotFound: FC = () => {
  return (
    <Container maxWidth='xl'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h1'>404</Typography>
        <Typography variant='h6'>The page you’re looking for doesn’t exist.</Typography>
      </Box>
    </Container>
  );
};
