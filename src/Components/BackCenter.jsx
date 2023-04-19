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
    <Box
      sx={{
        height: '55vh',
      }}
    >
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
            <Next sx={{ fontSize: '40px', ml: '-50px', color: '#fff' }} />
          ),
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            zIndex: '11',
          },
          children: (
            <Prev sx={{ fontSize: '40px', mr: '-50px', color: '#fff' }} />
          ),
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '55vh',
          }}
        >
          <img
            style={{
              backgroundImage: `url(${Backg_1})`,
              position: 'absolute',
              height: '55vh',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              textAlign: 'center',
              textTransform: 'uppercase',
              justifyContent: 'center',
              textShadow: '12px 9px 11px #000',
              fontWeight: 700,
              color: 'whitesmoke',
              display: 'flex',
              m: { lg: '200px 710px', xs: '120px 50px' },
              width: { lg: '610px', xs: '280px' },
              fontSize: { lg: '52px', xs: '32px' },
              background: ' rgba(280, 280, 280, 0.6)',
              borderRadius: '5px',
            }}
          >
            marque sua a consulta
          </Typography>
        </div>
        {/*  */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '55vh',
          }}
        >
          <img
            style={{
              backgroundImage: `url(${Backg_2})`,
              position: 'absolute',
              height: '55vh',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              textAlign: 'center',
              textTransform: 'uppercase',
              justifyContent: 'center',
              textShadow: '12px 9px 11px #000',
              fontWeight: 700,
              color: 'whitesmoke',
              display: 'flex',
              m: { lg: '200px 710px', xs: '120px 50px' },
              width: { lg: '610px', xs: '280px' },
              fontSize: { lg: '38px', xs: '22px' },
              background: ' rgba(280, 280, 280, 0.6)',
              borderRadius: '5px',
            }}
          >
            ENTENDER A SUA ROTINA PARA PROPOR MUDANÇAS ,<br /> POSSÍVEIS E DE
            RESULTADO
          </Typography>
        </div>
        {/*  */}

        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '55vh',
          }}
        >
          <img
            style={{
              backgroundImage: `url(${Backg_3})`,
              position: 'absolute',
              height: '55vh',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              textAlign: 'center',
              textTransform: 'uppercase',
              justifyContent: 'center',
              textShadow: '12px 9px 11px #000',
              fontWeight: 700,
              color: 'whitesmoke',
              display: 'flex',
              m: { lg: '200px 710px', xs: '120px 50px' },
              width: { lg: '610px', xs: '280px' },
              fontSize: { lg: '38px', xs: '22px' },
              background: ' rgba(280, 280, 280, 0.6)',
              borderRadius: '5px',
            }}
          >
            CADA PESSOA E ÚNICA, E CADA DIETA, TAMBÉM
          </Typography>
        </div>
      </ReactSimplyCarousel>
    </Box>
  );
};

export default BackCenter;
