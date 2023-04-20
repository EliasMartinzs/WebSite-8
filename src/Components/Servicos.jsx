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
        p: { xs: '25px' },
        boxShadow: '10px 10px 10px #000',
        borderBottom: '2px solid #000',
      }}
    >
      <Stack
        sx={{
          alignItems: 'center',
          p: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: '82px', xs: '24px' },
            borderRadius: '0px',
            mt: '68px',
            color: 'black',
            textShadow: '10px 10px 10px grey',
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
          gap: '25px',
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
