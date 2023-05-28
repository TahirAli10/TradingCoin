import React, { useEffect } from "react";
import shirt1 from "../assests/images/shirt1.png";
import shirt2 from "../assests/images/shirt2.png";
import shirt3 from "../assests/images/shirt3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testamonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 col-lg-4 "
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src={shirt2}
            alt=""
            style={{ cursor: "pointer", width: "500px", height: "500px" }}
          />
        </div>
        <div
          className="col-sm-12 col-lg-4 "
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img
            src={shirt3}
            alt=""
            style={{
              cursor: "pointer",
              width: "550px",
              height: "550px",
              marginTop: "-40px",
              marginLeft: "-40px",
            }}
          />
        </div>
        <div
          className="col-sm-12 col-lg-4 "
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <img
            src={shirt1}
            alt=" "
            style={{
              cursor: "pointer",
              width: "500px",
              height: "500px",
              marginLeft: "-40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
