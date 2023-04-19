import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography, Button } from '@mui/material';

import COLOR from '../constants/COLOR';
import Home from '@mui/icons-material/HomeOutlined';
import People from '@mui/icons-material/PeopleAltOutlined';
import Contact from '@mui/icons-material/CallOutlined';
import Down from '@mui/icons-material/KeyboardArrowDown';
import Up from '@mui/icons-material/KeyboardArrowUp';

const Navbar = () => {
  const [isVisible, SetIsVisible] = useState(true);

  return (
    <Box>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          bgcolor: '#000',
          color: 'rgba(280,280,280,.5)',
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: '14px', xs: '10px' },
          }}
        >
          Jonathan Galassi +55 (43) 99162-2448 email@gmail.com
        </Typography>
      </Stack>
      <Box
        sx={{
          justifyContent: { lg: 'space-between', xs: 'center' },
          textAlign: { xs: 'center' },
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: '32px', xs: '24px' },
            bgcolor: COLOR.green[500],
            color: '#000',
          }}
        >
          Jonathan Galassi
        </Typography>
        <Box
          sx={{
            bgcolor: COLOR.green[500],
          }}
        >
          <Button sx={{ display: { lg: 'none', xs: 'flex' } }}>
            {isVisible ? (
              <Down
                sx={{ fontSize: '32px', color: '#000' }}
                onClick={() => SetIsVisible(false)}
              />
            ) : (
              <Up
                sx={{ fontSize: '32px', color: '#000' }}
                onClick={() => SetIsVisible(true)}
              />
            )}
          </Button>
          {isVisible ? (
            <Stack
              sx={{
                display: { lg: 'flex', xs: 'none' },
                flexDirection: 'row',
                gap: '45px',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
              <a href="#home" className="link">
                Home
              </a>
              <a href="#servicos" className="link">
                Serviços
              </a>
              <a href="#contato" className="link">
                Contatos
              </a>
            </Stack>
          ) : (
            <Stack
              sx={{
                display: { lg: 'none', xs: 'flex' },
                flexDirection: 'column',
                gap: '30px',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
              <a href="#home" className="link">
                <Button
                  sx={{
                    color: '#000',
                    gap: '5px',
                  }}
                >
                  Home <Home />
                </Button>
              </a>
              <a href="#servicos" className="link">
                <Button
                  sx={{
                    color: '#000',
                    gap: '5px',
                  }}
                >
                  Servicos <People />
                </Button>
              </a>
              <a href="#contato" className="link">
                <Button
                  sx={{
                    color: '#000',
                    gap: '5px',
                  }}
                >
                  Contato <Contact />
                </Button>
              </a>
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
