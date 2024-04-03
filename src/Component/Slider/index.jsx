import React from "react";
import "./slider.css";
import { techImage } from "../../ImagesData";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import dice from '../../assets/dice.svg'
const index = () => {

  return (
    <Box  className='slider-box'>
      <Box className='dice-box'>
        <img src={dice} alt="" loading="lazy" className="zoom-dice"/>
      </Box>
      <Box className="tech-h">OUR TECH STACK</Box>
      <Marquee
        pauseOnHover={true}
        loop={0}
        style={{
          display: "flex",
          gap: "10rem",
        }}
      >
        {techImage?.map((ele, index) => (
          <Box className="language-box language-box-shadow " >
            <img src={ele.img1} alt="" loading="lazy" className=""/>
          </Box>
        ))}
      </Marquee>
      <Box className='dice-box-right'>
        <img src={dice} alt="" loading="lazy" className="zoom-dice"/>
      </Box>
    </Box>
  );
};

export default index;
