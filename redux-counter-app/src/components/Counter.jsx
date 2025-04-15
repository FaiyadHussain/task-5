import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Container, Grid } from '@mui/material';
import { increment, decrement, reset } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.count); // Getting count from Redux store
  const dispatch = useDispatch(); // Dispatching actions

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', paddingTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Counter: {count}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(increment())}
            sx={{ padding: '10px 20px' }}
          >
            Increment
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(decrement())}
            sx={{ padding: '10px 20px' }}
          >
            Decrement
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="default"
            onClick={() => dispatch(reset())}
            sx={{ padding: '10px 20px' }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Counter;
