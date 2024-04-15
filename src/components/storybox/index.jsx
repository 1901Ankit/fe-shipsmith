import React from "react";
import cargoyard from "../../assests/images/banner/our-story.webp";
import controlloading from "../../assests/images/banner/quality-driven.webp";
import { useCountUp } from "react-countup";
import Button from "../button";
import { Link, useLocation } from "react-router-dom";
import Aos from "aos";
const Storybox = () => {
  Aos.init();
  const location = useLocation();
  useCountUp({ ref: "counter", end: 25, suffix: "+", delay: "1" });
  let features = [
    {
      heading: "Experienced",
      desc: "We have years of experience in ship repairing services.",
    },
    {
      heading: "Quality-Driven",
      desc: "We are committed to delivering high-quality workmanship and services to its clients.",
    },
  ];
  return (
    <div>
      <div className="row pt-5 storie">
        <div className="col-sm-5 col-md-5 col-lg-5">
          <div
            className="counter shadow"
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <div>
              <h4 className="text-center">
                <span id="counter"></span>
              </h4>
              <p>Years of Experience</p>
            </div>
          </div>
          <img src={cargoyard} width="100%" height={400} alt="" 
          />
          <img
            src={controlloading}
            className="control_loading"
            alt=""
            data-aos="fade-up"
            data-aos-offset="30"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          />
        </div>
        <div className="col-sm-1 col-md-0 col-lg-1"></div>
        <div className="col-sm-6  p-5">
          <p className="italic osto" color="">
            Our Story
          </p>
          <div
            className="story"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <h3 className="keep f-36" color="#000000">
              Keeping your ships afloat with expert repair solutions
            </h3>
            <p className="weare text-justify text-grey">
            We are a team of marine engineers from DMET who are dedicated and goal-oriented, and we like working in the demanding maritime sector. We strive to provide value repair solutions to all of our customers in a variety of markets because we take pride in both our customer service and the calibre of our deliverables. We want to share our expertise, know-how, and experience with others and provide cost-effective solutions for the most difficult vessel repair and outfitting projects.
            </p>

            <div className="story_features">
              {features.map((val) => (
                <div className="">
                  <h4>{val.heading}</h4>
                  <p>{val.desc}</p>
                </div>
              ))}
              {location.pathname === "/our-story" ? (
                <></>
              ) : (
                <Link to={"/our-story"}>
                  <Button
                    bg="#f9a634"
                    color="#222"
                    className="custom_btn"
                    fs="14px"
                    border="none"
                    bb="none"
                    padding="8px"
                  >
                    KNOW MORE{" "}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storybox;
