import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/800x200?text=Sale+Banner+1" alt="Sale 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x200?text=New+Arrivals" alt="New Arrivals" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x200?text=Summer+Collection" alt="Summer Collection" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
