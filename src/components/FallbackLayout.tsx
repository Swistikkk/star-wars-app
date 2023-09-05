import {Box, CircularProgress} from "@mui/material";

const FallbackLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default FallbackLayout;