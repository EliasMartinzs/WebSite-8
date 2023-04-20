import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import 'aos/dist/aos.css';

import COLOR from '../constants/COLOR';
import steps from '../constants/Steps';

const Atendimentos = () => {
  return (
    <Box
      sx={{
        bgcolor: COLOR.blue[500],
        p: { lg: '45px', xs: '10px' },
        display: { lg: 'grid', xs: 'flex' },
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'flex-start',
      }}
    >
      <Stack
        sx={{
          alignItems: { lg: 'flex-start', xs: 'center' },
          pt: { lg: '65px', xs: '38px' },
        }}
      >
        <Typography
          data-aos="fade-right"
          data-aos-duration="2000"
          sx={{
            fontSize: { lg: '52px', xs: '28px' },
            fontWeight: 700,
            color: 'whitesmoke',
            textTransform: 'capitalize',
            mb: '15px',
          }}
        >
          como funciona nosso atendimento.
        </Typography>

        <Typography
          data-aos="fade-left"
          data-aos-duration="2000"
          sx={{
            color: 'whitesmoke',
            fontSize: { lg: '16px', xs: '12px' },
          }}
        >
          Cada pessoa tem seu estilo de vide e histórias, um paladar, um corpo.
          E é por isso que um método padronizado não vai funcionar para todo
          mundo. A alimentação deve ser adaptada a cada um, assim como nos
          adaptamos com acontecimentos da vida. O atendimento nutricional
          consiste em várias etapas e entregas. E assim cada dieta e unica. Como
          o paciente.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: { lg: 'flex-start' },
            flexDirection: 'column',
            mt: { lg: '52px', xs: '36px' },
            gap: '20px',
            ml: { xs: '10px' },
          }}
        >
          {steps.map((item, index) => (
            <Stack
              data-aos="fade-right"
              data-aos-duration="2000"
              key={index}
              sx={{
                gap: '16px',
                flexDirection: 'row',
              }}
            >
              <img src={item.icon} alt={item.label} className="img-icon" />
              <Typography
                sx={{
                  color: 'whitesmoke',
                }}
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Atendimentos;
