import React from "react";
import "./slider.css";
import { techImage } from "../../ImagesData";
import Marquee from "react-fast-marquee";

const index = () => {
  console.log(techImage, "ygfvbjh");

  return (
    <div className="item">
        <Marquee>
      {/* <div className="language-box language-box-shadow"></div> */}
      {techImage?.map((ele, index) => (
        <div className="language-box language-box-shadow">
            <img src={ele.img1} alt="" loading="lazy" />
        </div>
      ))}
      </Marquee>
    </div>
  );
};

export default index;
