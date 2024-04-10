import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => (
  <Box
    minHeight="100vh"
    minWidth="70vw"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <CircularProgress />
  </Box>
);

export default Loader;
