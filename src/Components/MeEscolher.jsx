import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import 'aos/dist/aos.css';

import COLOR from '../constants/COLOR';

const MeEscolher = () => {
  return (
    <Box
      id="contato"
      sx={{
        bgcolor: COLOR.white[200],
      }}
    >
      <Stack
        sx={{
          justifyContent: 'center',
          p: { lg: '160px 280px', xs: '70px 25px' },
        }}
      >
        <Typography
          data-aos="fade-left"
          data-aos-duration="2000"
          sx={{
            textTransform: 'uppercase',
            textAlign: 'center',
            color: COLOR.blue[500],
            fontSize: { lg: '58px', xs: '39px' },
            fontWeight: 900,
            mb: '32px',
          }}
        >
          por que nos escolher ?
        </Typography>
        <Typography
          data-aos="fade-right"
          data-aos-duration="2000"
          sx={{
            fontSize: { lg: '18px' },
            textAlign: 'center',
            fontWeight: 300,
          }}
        >
          Se você está procurando um nutricionista que possa ajudá-lo a alcançar
          seus objetivos de saúde e bem-estar, existem várias razões pelas quais
          você deve me escolher como seu próximo nutricionista.
          <br />
          <br />
          Meu atendimento é personalizado e adaptado às suas necessidades e
          objetivos individuais. Eu trabalho em parceria com você para entender
          suas preferências alimentares, histórico de saúde e estilo de vida, e
          desenvolvo um plano alimentar personalizado que funcione para você.
          <br />
          <br />
          Eu também utilizo uma abordagem integrativa, que leva em consideração
          outros aspectos importantes para a sua saúde e bem-estar, como
          atividade física, qualidade do sono e gerenciamento do estresse.
          <br />
          <br />
          Por fim, estou disponível para fornecer suporte e acompanhamento
          contínuo ao longo do seu processo de transformação. Eu estarei com
          você a cada passo do caminho, fornecendo motivação, esclarecendo
          dúvidas e ajustando seu plano alimentar conforme necessário.
        </Typography>
      </Stack>
    </Box>
  );
};

export default MeEscolher;
