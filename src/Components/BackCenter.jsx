import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AOS from 'aos';

import ReactSimplyCarousel from 'react-simply-carousel';

import COLOR from '../constants/COLOR';
import Backg_1 from '../assets/Back4.jpg';
import Backg_2 from '../assets/Back5.jpg';
import Backg_3 from '../assets/Backg_5.jpg';

import Prev from '@mui/icons-material/ArrowBackIosNew';
import Next from '@mui/icons-material/ArrowForwardIos';

const BackCenter = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  AOS.init();

  return (
    <Box sx={{ height: '70vh' }}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplay={true}
        autoplayDirection={'forward'}
        autoplayDelay={3000}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            zIndex: '11',
          },
          children: (
            <Next sx={{ fontSize: '40px', ml: '-50px', color: '#000' }} />
          ),
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            zIndex: '11',
          },
          children: (
            <Prev sx={{ fontSize: '40px', mr: '-50px', color: '#000' }} />
          ),
        }}
      >
        <Box
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '70vh',
          }}
        >
          <img
            style={{
              backgroundImage: `url(${Backg_1})`,
              position: 'absolute',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              textTransform: 'uppercase',
              p: { lg: '40px', xs: '30px' },
              width: { lg: '700px', xs: '300px' },
              top: { lg: '35%', xs: '32%' },
              fontSize: { lg: '45px', xs: '36px' },
              fontWeight: 700,
              textShadow: '4px 10px 8px #000',
              color: '#fff',
              textAlign: 'center',
              background: ' rgba(280, 280, 280, 0.5)',
            }}
          >
            marque a sua consulta
          </Typography>
        </Box>
        {/*  */}
        <Box
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '70vh',
          }}
        >
          <img
            style={{
              backgroundImage: `url(${Backg_2})`,
              position: 'absolute',
              height: '70vh',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              textTransform: 'uppercase',
              p: { lg: '30px', xs: '12px 45px' },
              width: { lg: '700px', xs: '300px' },
              top: { lg: '35%', xs: '32%' },
              fontSize: { lg: '41px', xs: '25px' },
              textShadow: '12px 9px 11px #000',
              fontWeight: 700,
              color: 'whitesmoke',
              background: ' rgba(280, 280, 280, 0.4)',
            }}
          >
            ENTENDER A SUA ROTINA PARA PROPOR MUDANÇAS ,<br /> POSSÍVEIS E DE
            RESULTADO
          </Typography>
        </Box>
        {/*  */}

        <Box
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '70vh',
          }}
        >
          <img
            style={{
              backgroundImage: `url(${Backg_3})`,
              position: 'absolute',
              height: '70vh',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              textTransform: 'uppercase',
              p: { lg: '30px', xs: '12px 45px' },
              width: { lg: '700px', xs: '300px' },
              top: { lg: '35%', xs: '32%' },
              fontSize: { lg: '41px', xs: '25px' },
              textShadow: '12px 9px 11px #000',
              fontWeight: 700,
              color: 'whitesmoke',
              background: ' rgba(280, 280, 280, 0.4)',
            }}
          >
            CADA PESSOA E ÚNICA, E CADA DIETA, TAMBÉM
          </Typography>
        </Box>
      </ReactSimplyCarousel>
    </Box>
  );
};

export default BackCenter;
