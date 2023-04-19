import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import COLOR from '../constants/COLOR';
import { CardsInfo } from '../constants/CardsInfo';
import CardServices from './CardServices';

const Servicos = () => {
  AOS.init();
  return (
    <Box
      id="servicos"
      sx={{
        bgcolor: COLOR.green[500],
        p: { xs: '0 25px' },
      }}
    >
      <Stack
        sx={{
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: '52px', xs: '24px' },
            textShadow: '0 3px 6px #fff',
            borderBottom: '1px solid #000',
            borderRadius: '8px',
          }}
        >
          Nossos Serviços
        </Typography>
      </Stack>

      <Box
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="2000"
        sx={{
          mt: { lg: '110px', xs: '55px' },
          display: { lg: 'grid', xs: 'block' },
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyContent: 'center',
          alignItems: 'center',
          pb: { lg: '', xs: '40px' },
        }}
      >
        {CardsInfo.map((item, index) => (
          <CardServices key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Servicos;
