import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find your dream home with our expert real estate listings and
              insights.
            </span>
            <span className="secondaryText">
              Discover top properties easily with our user-friendly real estate
              platform.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat ">
              <span>
                <CountUp start={9800} end={10000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={900} end={1000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={27} />
                <span>+</span>
              </span>

              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="  flexCenter hero-right">
          <motion.div
          initial={{x:"7rem",opacity:1}}
          animate={{x:0,opacity:1}}
          transition={{ duration: 2, type: "spring" }}
           className="image-container">
            <img src="hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
