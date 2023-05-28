import React from 'react';
import shirt1 from "../../assests/images/shirt1.png";
import shirt2 from "../../assests/images/shirt2.png";
import shirt3 from "../../assests/images/shirt3.png";
export default function Products() {
  return (
    <>
      <div className="marquee marquee--borders mt-5 " style={{ '--duration': '100s' }}></div>

      <div className="marquee">
        <div className="marquee__group">
          <img key={1} src={shirt1} alt="Product 1" />
          <img key={2} src={shirt2} alt="Product 2" />
          <img key={3} src={shirt3} alt="Product 3" />
       
       </div>

        <div aria-hidden="true" className="marquee__group">
        <img key={1} src={shirt1} alt="Product 1" />
          <img key={2} src={shirt2} alt="Product 2" />
          <img key={3} src={shirt3} alt="Product 3" />
  </div>
      </div>

      <div className="marquee marquee--borders" style={{ '--duration': '100s' }}></div>
    </>
  );
}

