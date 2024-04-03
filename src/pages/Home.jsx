import React from "react";
import Navbar from "../Component/Navbar/NavBar";
import Footer from "../Component/Footer/index";
import { Box, Grid, Typography } from "@mui/material";
import planeTea from "../assets/plane-tea.svg";
import { techImage } from "../ImagesData";
import Slider from "../Component/Slider/index";
import backOpacity from "../assets/back-opacity.svg";
import { TypeAnimation } from "react-type-animation";
import tea from '../assets/tea.svg'
import line from '../assets/line.svg'
Typography;
const Home = () => {
  console.log(techImage);
  return (
    <div>
      {/* Navbar Seaction */}
      <Navbar />

      {/* Seaction 0 */}
      <Grid container spacing={2} sx={{ width: "90%", margin: "auto" ,marginBottom:'1rem'}}>
        <Grid item xs={10} md={8}>
          <h1 className="plane-text ">Tech Beyond Limits</h1>
        </Grid>
        <Grid item xs={2} md={4} textAlign={'end'}>
          <img src={planeTea} alt="" loading="lazy" className="sect0-img1 dice-zoom"/>
        </Grid>
        <Grid item xs={12} sx={{display:{md:'flex',},justifyContent:{md:'end',sm:'center'},flexWrap:'wrap',}}>
          <p className="plane-text-p">
            We are dedicated to pushing boundaries and exploring the boundless
            possibilities of technology. Join us on a journey where innovation
            knows no limits. With us, you'll enter a realm of endless
            innovation, where your imagination is the only constraint. Embrace a
            future without boundaries – that's our promise.
          </p>
        </Grid>
      </Grid>
   
      {/* seaction 1 */}
      <Box className="journey-sect" >
        <Box >
          <h1 className="journey-sect-h">
            EFFICIENCY IN <span style={{ color: "#C46060" }}>EVERY</span>
            <br /> BYTE.
          </h1>
        </Box>
        <Box sx={{width:{md:'39%',sm:'80%'}}}>
          <TypeAnimation
          className="journey-p"
            sequence={[
              "Employing a streamlined and cohesive strategy, we meticulously manage our projects, guaranteeing impeccable deliverables within designated timelines. Our approach focuses on maintaining seamless processes to achieve flawless outcomes consistently.",
            ]}
            // style={{ fontSize: "2em" }}
            // repeat={Infinity}
          />
        </Box>
      </Box>
      {/* Seaction 2 */}
      <Box>
        <Slider />
      </Box>

      {/* Seaction 3 */}
      <Box className='footer-above'>
        {/* <img src={backOpacity} alt="" loading="lazy"/> */}
        <Box className="footer-above-sect">
        <img src={tea} alt="" className="dice-zoom"style={{marginBottom:'1rem'}} />
        <Typography  className="footer-above-h" sx={{fontSize:{md:'80px',xs:'2rem'},fontFamily:'"Space Grotesk", sans-serif'}}>
          Interested in Working
        </Typography>
        <Typography className="footer-above-h" sx={{fontSize:{md:'80px',xs:'2rem'},fontFamily:'"Space Grotesk", sans-serif'}}>
          With Us?
        </Typography>
        <button className="footer-above-btn">LAUNCH IT</button>
        </Box>
        <img src={line} alt="" className="dice-zoom line-img"/>
      </Box>
      {/* Footer seaction */}
      <Footer />
    </div>
  );
};

export default Home;
