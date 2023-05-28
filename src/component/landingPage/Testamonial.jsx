import React from 'react';
import testo1 from '../../assests/images/testo1.png';
import testo2 from '../../assests/images/testo2.png';
import testo3 from '../../assests/images/testo3.png';
import testo4 from '../../assests/images/testo4.png';
import testo5 from '../../assests/images/testo5.png';
import testo6 from '../../assests/images/testo6.png';

export default function Testamonial() {
  return (
    <div className="container">
      <div className="SlurpsLogo">
        <div className="sluprs">slurps</div>
        <div className="slurpsShop">.shop</div>
      </div>

      <div className="row testaminial">
        <div className="col-lg-2 col-sm-4 col-xs-6">
          <img src={testo1} alt="Testimonial 1" />
        </div>
        <div className="col-lg-2 col-sm-4 col-xs-6">
          <img src={testo2} alt="Testimonial 2" />
        </div>
        <div className="col-lg-2 col-sm-4 col-xs-6">
          <img src={testo3} alt="Testimonial 3" />
        </div>
        <div className="col-lg-2 col-sm-4 col-xs-6">
          <img src={testo4} alt="Testimonial 4" />
        </div>
        <div className="col-lg-2 col-sm-4 col-xs-6">
          <img src={testo5} alt="Testimonial 5" />
        </div>
        <div className="col-lg-2 col-sm-4 col-xs-6">
          <img src={testo6} alt="Testimonial 6" />
        </div>
      </div>
    </div>
  );
}
