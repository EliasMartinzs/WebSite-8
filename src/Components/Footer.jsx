import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import COLOR from '../constants/COLOR';
import InstaIcon from '@mui/icons-material/Instagram';
import WhatsIcon from '@mui/icons-material/WhatsApp';
import CopyIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  console.log(year);
  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,.95)',
        pt: { lg: '45px', xs: '20px' },
        p: { lg: '40px 280px' },
        pb: { xs: '20px' },
      }}
    >
      <Box
        sx={{
          justifyContent: { lg: 'space-between', xs: '' },
          display: { lg: 'flex', xs: 'block' },
          flexDirection: 'center',
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: { lg: '26px' },
              color: 'whitesmoke',
              textAlign: { xs: 'center' },
            }}
          >
            Jonathan Galassi Nutricionista
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '10px',
            justifyContent: { xs: 'center' },
            mt: { xs: '12px' },
          }}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=5543991622448&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <WhatsIcon
              sx={{
                color: 'white',
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/jonathan.galassi_nutri/"
            target="_blank"
          >
            <InstaIcon
              sx={{
                color: 'white',
              }}
            />
          </a>
        </Stack>
      </Box>
      <Stack justifyContent="space-between" direction="row">
        <Typography
          sx={{
            textAlign: 'center',
            pt: '25px',
            color: 'rgba(280,280,280,.5)',
          }}
        >
          <CopyIcon sx={{ fontSize: '16px' }} /> {year} | Copyright by Jonathan
          Galassi
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            pt: '25px',
            color: 'rgba(280,280,280,.5)',
          }}
        >
          Design by{' '}
          <a href="https://www.instagram.com/eliasmartinzs/" target="_blank">
            Elias Martins
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
