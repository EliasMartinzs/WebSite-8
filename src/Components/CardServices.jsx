import React from 'react';
import { Stack, Card, Typography } from '@mui/material';

import COLOR from '../constants/COLOR';

const CardServices = ({ item }) => {
  return (
    <Card
      sx={{
        bgcolor: 'transparent',
      }}
    >
      <Stack
        sx={{
          alignItems: 'center',
        }}
      >
        <img src={item.icon} alt="" className="img-card" />
      </Stack>
      <Stack
        sx={{
          alignItems: 'center',
          p: '90px 60px',
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: '30px', xs: '23px' },
            fontWeight: 700,
            color: 'black',
            borderBottom: '1px outset black',
            p: '9px 0',
            textAlign: 'center',
          }}
        >
          {item.name}
        </Typography>

        <Typography
          sx={{
            color: 'black',
            mt: '45px',
            textAlign: 'center',
          }}
        >
          {item.desc}
        </Typography>
      </Stack>
    </Card>
  );
};

export default CardServices;
