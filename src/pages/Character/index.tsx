import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Avatar, Container, Button } from '@mui/material';
import { CharactersServise } from '../../services/Characters';
import { CharacterApiModel } from '../../definitions';
import { ROUTES } from '../../constants/router';

export const Character: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterApiModel | null>(null);

  useEffect(() => {
    if (typeof id !== 'string') {
      return;
    }

    CharactersServise.getCharacterById(Number(id))
      .then(setCharacter)
      .catch(() => {
        navigate(ROUTES.NOT_FOUND);
      });
  }, [id]);

  return (
    <Container maxWidth='xl'>
      <Button onClick={() => navigate(ROUTES.CHARACTERS)}>back to list</Button>
      <Avatar alt={character?.name} src={character?.image} />
      <p>{character?.name}</p>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.type}</p>
      <p>{character?.gender}</p>
      <p>{new Date(character?.created ?? '').toLocaleString()}</p>
    </Container>
  );
};
