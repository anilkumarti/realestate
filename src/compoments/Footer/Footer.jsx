import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="logo2.png" alt="image" width={120} />
          <span className="secondoryText">
            Our vision is to simplify renting with <br />
            transparency and affordability for all.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information </span>
          <span className="secondaryText"> North Karondia, Sidhi, India</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
