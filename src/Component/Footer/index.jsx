import React from "react";
import "./footer.css";
import { Box, Grid, Typography } from "@mui/material";
import serviceBox from "../../assets/cupDice2.svg";
import footerLogo from "../../assets/footer_logo.png";
import dice from "../../assets/cupDice.svg";
import footerBtn from "../../assets/footer-btn.svg";

Typography;
const index = () => {
  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor:'#ede7d9',paddingBottom:'1rem',marginTop:'.5rem'}}>
      <Grid container  >
        <Grid item  xs={12} md={6}>
          <Grid item xs={12} md={12} >
            <img src={serviceBox} alt="" loading="lazy" className="dice-zoom"/>
          </Grid>
          <Grid item md={12} xs={12} sx={{ display: "flex", justifyContent: "center",alignContent:'center' }}  >
            <img
              src={footerLogo}
              alt=""
              loading="lazy"
              className="footer-img1 "
            />
          </Grid>
          <Grid xs={12} sx={{ display: {md:'flex',xs:'none'}, justifyContent: "end" }}>
            <img src={dice} alt="" loading="lazy" className="dice-zoom"/>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className="newsletter">Join Our Newsletter</h1>
          <p className="newpapar">
            Subscribe to our newsletter for the latest updates, trends, and
            insights delivered straight to your inbox.
          </p>
          <div className="text-box">
            <input type="email" name="email" className="footer-input" placeholder="Enter Your Email"/>
            <span>
              <button className="footer-btn">
                <img src={footerBtn} alt="" loading="lazy" />
              </button>
            </span>
          </div>
        </Grid>
        <Grid item className="foter-social" sx={{borderTop:'2px solid black',width:'100%',marginTop:3,paddingTop:3}}> 
        <p className="footerPara">©2020 All Rights Reserved. Koffeekodes® is a registered trademark. Privacy | Terms | Legal | Cookie Preferences</p>
        <div className="social-icon-border">
        <i class="fa fa-whatsapp" aria-hidden="true"></i>
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <i class="fa fa-skype" aria-hidden="true"></i>
        <i class="fa fa-telegram" aria-hidden="true"></i>
        </div>
      </Grid>
      </Grid>
      
    </Box>
  );
};

export default index;
