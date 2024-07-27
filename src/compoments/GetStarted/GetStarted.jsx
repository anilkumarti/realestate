import React from "react";
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homzy</span>
          <span className="SecondoryText">Subscribes and get price quotes
            <br/>
          Get your home soon</span>
          <button className="button"> 
            <a href="mailto:aniltiwari1403@gmail.com"> Get Started</a>

          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
