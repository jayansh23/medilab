import React from 'react'
import Slider from "react-slick";


const About = () => {

var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
  return (
    <Slider {...settings}>
    <div>

      <img src="banner/banner-1.jpg" />
    </div>
    <div>
      <img src="banner/healthbanner/banner-2.jpg" />
    </div>
    <div>
    <img src="banner/healthbanner/banner-3.jpg"/>
    </div>
    <div>
      <img src="banner/healthbanner/banner-4.jpg"/>
    </div>
    <div>
  <img src="banner/healthbanner/banner-5.jpg"/>
    </div>

  </Slider>

  )
}


export default About;