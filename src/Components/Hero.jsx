import React from "react";

const Hero = ({ children, title, img }) => {
  return (
    <div
      className="big_graphical_image_container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="big_graphical_image"></div>
      <h1>{title}</h1>

      {children}
    </div>
  );
};

export default Hero;
