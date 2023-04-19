import React from 'react';
import { Box, Typography } from '@mui/material';
import 'aos/dist/aos.css';

import COLOR from '../constants/COLOR';
import CardLocals from '../Components/CardLocals';
import LocalsInfo from '../constants/LocalsInfo';
import Form from './Form';

const Locals = () => {
  return (
    <Box
      sx={{
        bgcolor: COLOR.green[500],
        height: { lg: '', xs: '1800px' },
      }}
    >
      <Box
        sx={{
          display: { lg: 'grid', xs: 'block' },
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <Box>
          <Typography
            data-aos="fade-down"
            data-aos-duration="2000"
            sx={{
              textAlign: 'center',
              m: { lg: '65px 0px', xs: '58px' },
              fontSize: { lg: '42px', xs: '32px' },
              color: '#000',
              fontWeight: '700',
            }}
          >
            Locais De Atendimentos
          </Typography>

          {LocalsInfo.map((item, index) => (
            <CardLocals key={index} item={item} />
          ))}
        </Box>

        <Box>
          <Typography
            data-aos="fade-down"
            data-aos-duration="2000"
            sx={{
              textAlign: 'center',
              m: { lg: '65px 0px', xs: '58px' },
              fontSize: { lg: '42px', xs: '32px' },
              color: '#000',
              fontWeight: '700',
            }}
          >
            Marque sua consulta ou tire suas dúvidas
          </Typography>

          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Locals;
