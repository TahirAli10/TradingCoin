import React from 'react';
import shirt1 from "../../assests/images/shirt1.png";
import shirt2 from "../../assests/images/shirt2.png";
import shirt3 from "../../assests/images/shirt3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Products() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className='container'>
      <Slider {...settings}>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <img src={shirt1} className='testamonialShrits' style={{margin:"0 auto"}} />
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <img src={shirt2} className='testamonialShrits' style={{margin:"0 auto"}} />
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <img src={shirt3} className='testamonialShrits' style={{margin:"0 auto"}} />
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <img src={shirt1} className='testamonialShrits' style={{margin:"0 auto"}} />
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <img src={shirt2} className='testamonialShrits' style={{margin:"0 auto"}} />
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <img src={shirt3} className='testamonialShrits' style={{margin:"0 auto"}} />
        </div>
      </Slider>
    </div>
  );
}
