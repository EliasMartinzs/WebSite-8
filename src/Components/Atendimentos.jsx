import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import 'aos/dist/aos.css';

import COLOR from '../constants/COLOR';
import Avali from '../Icons/Avaliacao.png';
import Plano from '../Icons/Plano.png';
import Dispon from '../Icons/Disponibilidades.png';
import Metas from '../Icons/Metas.png';
import Recipe from '../Icons/Recipes.png';
import Result from '../Icons/Results.png';

const steps = [
  {
    label: 'Avaliacao corporal',
    icon: Avali,
  },
  {
    label: 'Plano alimentar individualizado',
    icon: Plano,
  },
  {
    label: 'Disponibilidade para tirar duvidas entre as consultas',
    icon: Dispon,
  },
  {
    label: 'Alcance Progressivo de metas',
    icon: Metas,
  },
  {
    label: 'Entrega de receitas variadas',
    icon: Recipe,
  },
  {
    label: 'Resultados comprovados em poucos meses',
    icon: Result,
  },
];

const Atendimentos = () => {
  return (
    <Box>
      <Box
        sx={{
          display: { lg: 'grid', xs: 'block' },
          flexDirection: 'column',
          gridTemplateColumns: '1000px 1fr',
          bgcolor: COLOR.blue[500],
          height: { lg: '800px', xs: '600px' },
        }}
      >
        <Stack
          sx={{
            gap: { lg: '22px', xs: '11' },
            ml: { lg: '65px' },
          }}
        >
          <Stack
            sx={{
              m: { lg: '65px 0 65px', xs: '42px 18px 42px' },
            }}
          >
            <Typography
              data-aos="fade-left"
              data-aos-duration="2000"
              variant="h3"
              sx={{
                mb: { lg: '28px', xs: '23px' },
                fontSize: { lg: '52px', xs: '28px' },
                fontWeight: 700,
                color: COLOR.green[500],
                textShadow: '8px 9px 9px rgba(0,0,0,.5)',
              }}
            >
              Como funciona o nosso atendimento.
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-duration="2000"
              variant="h6"
              sx={{
                fontSize: { lg: '20', xs: '14px' },
                color: COLOR.green[300],
              }}
            >
              Cada pessoa tem seu estilo de vide e histórias, um paladar, um
              corpo. E é por isso que um método padronizado não vai funcionar
              para todo mundo. A alimentação deve ser adaptada a cada um, assim
              como nos adaptamos com acontecimentos da vida. O atendimento
              nutricional consiste em várias etapas e entregas. E assim cada
              dieta e unica. Como o paciente.
            </Typography>
          </Stack>
          {steps.map((item, index) => (
            <Stack key={index}>
              <Stack
                sx={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <img src={item.icon} alt="" className="img-icon" />
                <Typography
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  sx={{
                    fontSize: { lg: '18px', xs: '14px' },
                    textTransform: 'capitalize',
                    color: 'whitesmoke',
                  }}
                >
                  {item.label}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Atendimentos;
