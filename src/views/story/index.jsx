import React, { useEffect, useState } from "react";
import "./index.css";
import Storybox from "../../components/storybox";
import Companynumbers from "../../components/company_numbers";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assests/images/ourstory/slider1.webp";
import slider2 from "../../assests/images/ourstory/slider2.webp";
import slider3 from "../../assests/images/ourstory/slider3.webp";
import slider4 from "../../assests/images/ourstory/slider4.webp";
import Team from "../../components/team";
import Multicarousel from "../../components/multicarousel";
import Subscribe from "../../components/subscribe";
const Story = () => {
  let images = [
    {
      img: slider1,
    },
    {
      img: slider2,
    },
    {
      img: slider3,
    },
    {
      img: slider4,
    },
  ];
  const text = {
    test: "Shipsmith aims to provide ship repair solutions that are both innovative and sustainable. This means leveraging the latest technologies and practices to repair ships in the most efficient and effective way possible, while also minimizing environmental impact.",
    test1:
      "Shipsmith's vision is to ensure the safety, efficiency, and profitability of its clients' maritime operations. This means prioritizing the needs of clients and developing solutions that help them achieve their business goals.",
    test2:
      "Shipsmith is committed to preserving the integrity of our oceans and marine environment. This means taking a responsible approach to ship repair and minimizing the impact of its operations on the environment.",
  };
  let [message, setMessage] = useState(false);
  const showhandler = (value) => {
    if (value === "0") {
      setMessage(text.test);
    } else if (value === "1") {
      setMessage(text.test1);
    } else {
      setMessage(text.test2);
    }
  };
  useEffect(() => {
    showhandler("0");
  }, []);
  return (
    <div>
      <div className="story_bg">
        <div className="story_overlay">
          <div>
            <p
              className="fw-semibold f-20 text-center  italic"
              style={{ color: "#f9a634" }}
            >
              OUR STORY
            </p>
            <h3 className="youur">YOUR RELIABLE PARTNER IN SHIP REPAIR</h3>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <Storybox />
      </div>
      <div>
        <Companynumbers />
      </div>
      <div className="my-5">
        <div className="container my-5">
          <div className="row visi">
            <div className="col-sm-6 mt-5 ">
              <p className="italic mt-5">Vision & Strategy</p>
              <h4 className="power text-blue f-30">
                Revitalizing ships,powering global trade
              </h4>
              <p className="leads text-grey text-justify">
                To be the leading provider of innovative and sustainable ship
                repair solutions, dedicated to ensuring the safety, efficiency,
                and profitability of our client's maritime operations, while
                preserving the integrity of our oceans and marine environment.
              </p>
              {/* <div className="shadow my-3">
                <div className={`${message ? "tab__Section" : "tab_Section"} `}>
                  <h4
                    className={`${
                      message === text.test ? "tab__heading" : "tab_heading"
                    } mb-0`}
                    onClick={() => showhandler("0")}
                  >
                    Innovative & sustainable repair solutions
                  </h4>
                  <h4
                    className={`${
                      message === text.test1 ? "tab__heading" : "tab_heading"
                    } mb-0`}
                    onClick={() => showhandler("1")}
                  >
                    Client-focused approach
                  </h4>
                  <h4
                    className={`${
                      message === text.test2 ? "tab__heading" : "tab_heading"
                    } mb-0`}
                    onClick={() => showhandler("2")}
                  >
                    Commitment to environmental stewardship
                  </h4>
                </div>
                <p
                  className="text-justify p-3"
                  style={{ transition: "1s ease all" }}
                >
                  {message}
                </p>
              </div> */}
            </div>

            <div className="col-sm-6 mt-5 jmjm">
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                dynamicHeight={true}
              >
                {images.map((val) => (
                  <img src={val.img} alt="" />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4  ">
            <div className="headback shadow">
              <h5 className="headinghover">
                Innovative & sustainable repair solutions
              </h5>
              <p className="text-justify f-13 mt-3 ">
                Shipsmith aims to provide ship repair solutions that are both
                innovative and sustainable. This means leveraging the latest
                technologies and practices to repair ships in the most efficient
                and effective way possible, while also minimizing environmental
                impact.
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="headbackk shadow">
              <h5 className="headinghover">Client-focused approach</h5>
              <p className="text-justify f-13 mt-3">
                Shipsmith's vision is to ensure the safety, efficiency, and
                profitability of its clients' maritime operations. This means
                prioritizing the needs of clients and developing solutions that
                help them achieve their business goals.
              </p>
            </div>
          </div>

          <div className="col-sm-4 ">
            <div className="headbackkk shadow">
              <h5 className="headinghover">
                Commitment to environmental stewardship
              </h5>
              <p className="text-justify f-13 mt-3">
                Shipsmith is committed to preserving the integrity of our oceans
                and marine environment. This means taking a responsible approach
                to ship repair and minimizing the impact of its operations on
                the environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Team />
      </div>
      <div>
        <Multicarousel />
      </div>
      <div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Story;
