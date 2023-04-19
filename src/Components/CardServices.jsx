import React from 'react';
import { Box, Stack, Card, Typography } from '@mui/material';

import COLOR from '../constants/COLOR';

const CardServices = ({ item }) => {
  return (
    <Box>
      <Box
        sx={{
          height: '360px',
          width: { lg: '248px', xs: '270px' },
          ml: { lg: '1px', xs: '35px' },
          mr: { lg: '1px', xs: '35px' },
          gap: '1px',
          boxShadow: `8px 16px 16px rgba(110,112,115,.7)`,
        }}
      >
        <Stack sx={{ borderBottom: '1px solid #000' }}>
          <img src={item.icon} alt="" className="img-card" />
        </Stack>
        <Stack
          sx={{
            alignItems: 'center',
            mt: '25px',
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: '25px', xs: '23px' },
              fontWeight: 700,
              color: 'whitesmoke',
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              mt: '15px',
              color: 'whitesmoke',
            }}
          >
            {item.desc}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardServices;
