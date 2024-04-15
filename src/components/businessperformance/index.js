import React from "react";
import circleimage from "../../assests/images/banner/circle_img.png";
import Button from "../button";
import { Link, useLocation } from "react-router-dom";
import Aos from "aos";
import "./index.css";
import Circularprogress from "../circleprogressbar";
const Business = () => {
  const vesselmodernization = 80;
  const marine = 70;
  const marinesurveying = 90;
  const power = 87;
  const location = useLocation();
  Aos.init();
  return (
    <div>
      <div className="services_home_bg my-4">
        <div className="company_overlay">
          <div className="container">
            <div className="row p-5">
              {/* <div
                className="col-sm-5 p-5"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div className="row my-3">
                  <div className="col-sm-6">
                    <img src={circleimage} width={150} height={150} alt="" />
                    <h5 className="circle_head mb-0">80%</h5>
                    <p className="text-white">
                      vessel modernization and renovation
                    </p>
                  </div>
                  <div className="col-sm-6 ">
                    <img src={circleimage} width={150} height={150} alt="" />
                    <h5 className="circle_head mb-0">90%</h5>
                    <p className="text-white">
                      marine facilities and structures
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm-6">
                    <img src={circleimage} width={150} height={150} alt="" />
                    <h5 className="circle_head mb-0">70%</h5>
                    <p className="text-white">
                      marine surveying and inspection solutions
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img src={circleimage} width={150} height={150} alt="" />
                    <h5 className="circle_head mb-0">87%</h5>
                    <p className="text-white">
                      power and control systems engineering
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="col-sm-5">
                <div className="row my-3">
                  <div className="col-sm-5 col-md-5 col-lg-5  circular_progressbar ">
                    <Circularprogress
                      value={vesselmodernization}
                      text={`${vesselmodernization}+`}
                    />
                    <p className="ppaaa text-white text-center mt-2">
                      {" "}
                      Vessel Repair Solutions
                    </p>
                  </div>
                  <div className="col-sm-2"></div>
                  <div className="col-sm-5 col-md-5 circular_progressbar ">
                    <Circularprogress value={marine} text={`${marine}+`} />
                    <p className="text-white text-center mt-2 ppaaa">
                      {" "}
                      Retrofit Solutions and Upgradation Projects Onboard
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm-5 col-md-5  col-lg-5 circular_progressbar">
                    <Circularprogress
                      value={marinesurveying}
                      text={`${marinesurveying}+`}
                    />
                    <p className="ppaaa text-white text-center mt-2">
                      {" "}
                      Seamless Supply of Spares to Ships, Rigs, Offshore Vessels, and Port Ancillaries
                    </p>
                  </div>
                  <div className="col-sm-2"></div>
                  <div className="col-sm-5 col-md-5 col-lg-5 circular_progressbar">
                    <Circularprogress value={power} text={`${power}+`} />
                    <p className="ppaaa text-white text-center mt-2">
                      {" "}
                      Workshop Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-7 p-4 bespo"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                <div className="process_text">
                  <p className="italic" style={{ color: "#f9a634" }}>
                  Bespoke Ship Retrofit and Repair Services
                  </p>
                  <h4 className="keep text-white f-49 mb-4">
                    Boosting Maritime Business Performance
                  </h4>
                  <p className="busper text-white text-grey ">
                  Shipsmith provides comprehensive vessel repair, manufacturing, and fabrication of spare parts and upgrade solutions tailored to meet each client's unique needs and requirements. From afloat repairs of control systems to sourcing and testing spare parts, yard equipment, and ship and yard inspections, Shipsmith is committed to delivering high-quality and innovative ship repair, manufacturing, and procurement services to keep vessels in optimal condition and ensure their long-term sustainability.
                  </p>
                  <Link to={"/services"}>
                    <Button
                      text="uppercase"
                      fs="14px"
                      border="none"
                      bb="none"
                      padding="8px"
                      className="custom_btn"
                      bg="#f9a634"
                      color="#212121"
                    >
                      Know More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
