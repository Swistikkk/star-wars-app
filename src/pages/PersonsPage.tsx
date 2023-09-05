import {useCallback, memo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Box, CircularProgress, Grid, Pagination, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import useDebouncedSearch from 'src/hooks/useDebouncedSearch';
import PersonService from 'src/types/PersonService';
import Card from 'src/components/Card';
import { PeopleApiGetPeopleRequest } from 'src/api';

const PERSONS_KEY = 'PERSONS';

const StyledPagination = styled(Pagination)({
  justifyContent: 'flex-end',

  [`& ul`]: {
    justifyContent: 'flex-end',
  }
});

const PersonsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [search, debouncedSearch, setSearch] = useDebouncedSearch<string>('', 500);
  const {data, isFetching} = useQuery({
    queryKey: [PERSONS_KEY, {page, search: debouncedSearch}],
    queryFn: ({queryKey}) => PersonService.getPeople(queryKey[1] as PeopleApiGetPeopleRequest),
  });

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }, []);

  return (
    <>
      <Grid container marginBottom={2} justifyContent="space-between" alignItems="flex-end" flexWrap="nowrap">
        <Grid item xs={12} md={12} alignItems="center" justifyContent="center">
          <TextField
            label="Search"
            type="search"
            variant="standard"
            fullWidth
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </Grid>
      </Grid>
      <Grid item container display={{xs: 'none', sm: 'flex'}} md={12} justifyContent="center" alignItems="center">
          {
            isFetching && <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          }
          {data && data.count === 0 && <Typography variant="h5">No items</Typography>}
      </Grid>
      {data && (
        <Grid container spacing={3} justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap">
          {data.results.map(person => {
            return (
              <Grid key={person.id} item xs={12} sm={6} md={4}>
                <Card person={person} />
              </Grid>
            )
          })}
        </Grid>
      )}
      <Grid container alignSelf="center" justifyContent="center">
        {data && data?.count > 0 && (
          <StyledPagination disabled={isFetching} count={Math.ceil(data.count/data.pageSize)} page={page} onChange={handlePageChange} />
        )}
      </Grid>
    </>
  );
};

export default memo(PersonsPage);