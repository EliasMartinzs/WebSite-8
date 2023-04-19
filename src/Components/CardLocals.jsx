import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import InstaIcon from '../Icons/instaIcon.svg';

const CardLocals = ({ item }) => {
  return (
    <Stack
      sx={{
        p: '25px',
      }}
    >
      <Typography sx={{ textTransform: 'capitalize', fontWeight: 700 }}>
        {item.name}
      </Typography>
      <Typography>{item.adress}</Typography>
      <Link to={item.instUrl} style={{ width: '40px' }}>
        <img src={InstaIcon} alt="" className="img-icon" />
      </Link>
    </Stack>
  );
};

export default CardLocals;
