import React from 'react';
import { Box } from '@mui/material';

import BackCenter from './BackCenter';
import Servicos from './Servicos';
import Atendimentos from './Atendimentos';
import MeEscolher from './MeEscolher';
import Locals from './Locals';

import WhatsIcon from '../Icons/WhatsIcon.png';

const Home = () => {
  return (
    <Box>
      <BackCenter />
      <Servicos />
      <Atendimentos />
      <MeEscolher />
      <Locals />
    </Box>
  );
};

export default Home;
