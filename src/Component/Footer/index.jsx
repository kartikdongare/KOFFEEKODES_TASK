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
      <Grid container spacing={4} sx={{borderBottom:'2px solid black'}}>
        <Grid item xs={6}>
          <Grid xs={12}>
            <img src={serviceBox} alt="" loading="lazy" />
          </Grid>
          <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={footerLogo}
              alt=""
              loading="lazy"
              className="footer-img1"
            />
          </Grid>
          <Grid xs={12} sx={{ display: "flex", justifyContent: "end" }}>
            <img src={dice} alt="" loading="lazy" />
            {/* <img src={footerLogo} alt="" loading="lazy"/> */}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <h1 className="newsletter">Join Our Newsletter</h1>
          <p className="newpapar">
            Subscribe to our newsletter for the latest updates, trends, and
            insights delivered straight to your inbox.
          </p>
          <div className="text-box">
            <input type="email" name="email" className="footer-input" />
            <span>
              <button className="footer-btn">
                <img src={footerBtn} alt="" loading="lazy" />
              </button>
            </span>
          </div>
        </Grid>
      </Grid>
      <Grid className="foter-social"> 
        <p className="footerPara">©2020 All Rights Reserved. Koffeekodes® is a registered trademark. Privacy | Terms | Legal | Cookie Preferences</p>
        <div className="social-icon-border">
        <i class="fa fa-whatsapp" aria-hidden="true"></i>
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <i class="fa fa-skype" aria-hidden="true"></i>
        <i class="fa fa-telegram" aria-hidden="true"></i>
        </div>
      </Grid>
    </Box>
  );
};

export default index;
