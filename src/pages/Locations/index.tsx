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
import { LocationsServise } from '../../services/Locations';
import { LocationsListPayload } from '../../services/Locations/types';
import { LocationApiModel, SortOrder } from '../../definitions';
import { ROUTES } from '../../constants/router';
import { useSortOrder } from '../hooks';

export const Locations: FC = () => {
  const [locations, setLocations] = useState<LocationApiModel[]>([]);
  const [locationssSort, setLocationsSort] = useState<LocationsListPayload['sort']>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [createdColumnSortOrder, updateCreatedColumnSortOrder] = useSortOrder(
    (searchParams.get('created') as SortOrder) ?? undefined,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const payload: LocationsListPayload = {};

    if (locationssSort) {
      payload.sort = locationssSort;
    }

    LocationsServise.getLocations(payload).then(setLocations);
  }, [createdColumnSortOrder]);

  const toggleCreatedColumnSortOrder = () => {
    const newCreatedColumnSortOrder = updateCreatedColumnSortOrder();

    const createdSort = {
      created: newCreatedColumnSortOrder,
    };

    setLocationsSort(createdSort);
    setSearchParams(createdSort as URLSearchParamsInit);
  };

  const onLocationRowClick = (location: LocationApiModel) => {
    navigate(
      generatePath(ROUTES.LOCATION, {
        id: location.id,
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
              <TableCell>Type</TableCell>
              <TableCell>Dimension</TableCell>
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
            {locations.map((location) => {
              return (
                <TableRow key={location.id} onClick={() => onLocationRowClick(location)}>
                  <TableCell>{location.name}</TableCell>
                  <TableCell>{location.type}</TableCell>
                  <TableCell>{location.dimension}</TableCell>
                  <TableCell>{new Date(location.created).toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
