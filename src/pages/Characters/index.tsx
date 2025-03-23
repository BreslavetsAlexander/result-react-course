import { FC, useEffect, useState } from 'react';
import { useSearchParams, URLSearchParamsInit, generatePath, useNavigate } from 'react-router';
import {
  Avatar,
  Container,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TableSortLabel,
} from '@mui/material';
import { CharactersServise } from '../../services/Characters';
import { CharactersListPayload } from '../../services/Characters/types';
import { CharacterApiModel, SortOrder } from '../../definitions';
import { ROUTES } from '../../constants/router';
import { useSortOrder } from '../hooks';

export const Characters: FC = () => {
  const [characters, setCharacters] = useState<CharacterApiModel[]>([]);
  const [charactersSort, setSharactersSort] = useState<CharactersListPayload['sort']>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [createdColumnSortOrder, updateCreatedColumnSortOrder] = useSortOrder(
    (searchParams.get('created') as SortOrder) ?? undefined,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const payload: CharactersListPayload = {};

    if (charactersSort) {
      payload.sort = charactersSort;
    }

    CharactersServise.getCharacters(payload).then(setCharacters);
  }, [createdColumnSortOrder]);

  const toggleCreatedColumnSortOrder = () => {
    const newCreatedColumnSortOrder = updateCreatedColumnSortOrder();

    const createdSort = {
      created: newCreatedColumnSortOrder,
    };

    setSharactersSort(createdSort);
    setSearchParams(createdSort as URLSearchParamsInit);
  };

  const onCharacterRowClick = (character: CharacterApiModel) => {
    navigate(
      generatePath(ROUTES.CHARACTER, {
        id: character.id,
      }),
    );
  };

  return (
    <Container maxWidth='xl'>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Gender</TableCell>
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
            {characters.map((character) => {
              return (
                <TableRow key={character.id} onClick={() => onCharacterRowClick(character)}>
                  <TableCell>
                    <Avatar alt={character.name} src={character.image} />
                  </TableCell>
                  <TableCell>{character.name}</TableCell>
                  <TableCell>{character.status}</TableCell>
                  <TableCell>{character.species}</TableCell>
                  <TableCell>{character.type}</TableCell>
                  <TableCell>{character.gender}</TableCell>
                  <TableCell>{new Date(character.created).toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
