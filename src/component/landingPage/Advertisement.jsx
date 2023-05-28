import React from "react";
import glass from "../../assests/images/slurp glass.png";
import logo from "../../assests/images/slurp logo.png";
import rolls from "../../assests/images/slurp rolls.jpg";
export default function Advertisement() {
  return (
    <>
      <div className="container my-5" >
        <div className="row d-flex justify-content-between">
          <div className="col-lg-4 col-12 d-flex justify-content-between">
            <img
              src={glass}
              className="img-fluid"
              alt="glass"
              style={{ width: "400px", margin: "0 auto", zIndex:"5" }}
            />
          </div>
          <div
            className="col-lg-4 col-12 d-flex justify-content-center align-items-center"
            style={{ margin: "0 auto" }}
          >
            <div style={{ textAlign: "center", position:"relative" }}>
              <img
                src={logo}
                className="img-fluid"
                alt="Logo"
                style={{ width: "400px", marginTop: "-85px", zIndex:"1", position:'relative' }}
              />
              <img src={rolls} alt="rolls" style={{ width: "400px", height:"300px",  marginTop: "-175px", zIndex:"5"  }} />
            </div>
          </div>
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <img className="img-fluid" src={glass} alt="glass" style={{ width: "400px",transform: "scaleX(-1)", zIndex:"5" }} />
          </div>
        </div>
      </div>
    </>
  );
}
