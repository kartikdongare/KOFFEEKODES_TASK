import React from "react";
import Navbar from "../Component/Navbar/NavBar";
import Footer from "../Component/Footer/index";
import { Box, Grid } from "@mui/material";
import planeTea from "../assets/plane-tea.svg";
import { techImage } from "../ImagesData";
import Slider from '../Component/Slider/index'
const Home = () => {
  console.log(techImage)
  return (
    <div>
      {/* Navbar Seaction */}
      <Navbar />
      
      {/* Seaction 1 */}
      <Grid container spacing={2} sx={{width:'90%',margin:'auto'}}>
        <Grid item xs={8}>
          <h1 className="plane-text">Tech Beyond Limits</h1>
        </Grid>
        <Grid item xs={4}>
          <img src={planeTea} alt="" loading="lazy" />
        </Grid>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'end'}}>
          <p className="plane-text-p" >
            We are dedicated to pushing boundaries and exploring the boundless
            possibilities of technology. Join us on a journey where innovation
            knows no limits. With us, you'll enter a realm of endless
            innovation, where your imagination is the only constraint. Embrace a
            future without boundaries – that's our promise.
          </p>
        </Grid>
      </Grid>

      {/* Seaction 2 */}
      <Box>
        <Slider/>
      </Box>

      {/* Footer seaction */}
      <Footer />
    </div>
  );
};

export default Home;
