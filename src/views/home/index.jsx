import React from "react";
import "./index.css";
import Button from "../../components/button";
import { CiSettings } from "react-icons/ci";
import Shipment from "../../components/shipmentbox";
import description from "../../assests/data/const";

import { useCountUp } from "react-countup";
import Solutionbox from "../../components/solutionbox";
import solution from "../../assests/data/solution";
import Shiprepair from "../../components/shiprepair";
import competitive from "../../assests/data/competitive";
import videoss from "../../assests/images/video/aerial-footage 6x19.mp4";
import video from "../../assests/images/video/aerial-footage-of-ships-in-repair-facility-2022-08-10-21-36-01-utc.mp4"
import Companynumbers from "../../components/company_numbers";
import Team from "../../components/team";
import { Carousel } from "react-responsive-carousel";
import Multicarousel from "../../components/multicarousel";
import Subscribe from "../../components/subscribe";
import Aos from "aos";
import { Link } from "react-router-dom";
import Storybox from "../../components/storybox";
import Business from "../../components/businessperformance";
const Home = () => {
  Aos.init({ able: "mobile" });
  useCountUp({ ref: "counter", end: 25, suffix: "+" });

  let solution1 = [
    {
      img: solution.img1,
      heading: solution.heading1,
      para: solution.para1,
    },
    {
      img: solution.img2,
      heading: solution.heading2,
      para: solution.para2,
    },
    {
      img: solution.img3,
      heading: solution.heading3,
      para: solution.para3,
    },
    {
      img: solution.img4,
      heading: solution.heading4,
      para: solution.para4,
    },
  ];
  let solution2 = [
    {
      img: solution.img5,
      heading: solution.heading5,
      para: solution.para5,
    },
    {
      img: solution.img6,
      heading: solution.heading6,
      para: solution.para6,
    },
    {
      img: solution.img7,
      heading: solution.heading7,
      para: solution.para7,
    },
    {
      img: solution.img8,
      heading: solution.heading8,
      para: solution.para8,
    },
  ];
  let testimonials = [
    {
      para: "Shipsmith provided us with exceptional ship repair services. Their team was efficient, knowledgeable, and completed the project within the given timeline. We were extremely satisfied with their work, and we highly recommend them for any ship repair needs.",
    },
    {
      para: "We have been working with Shipsmith for several years, and they have always delivered high-quality and reliable ship repair solutions. Their team is responsive, and they have the technical expertise to handle any challenge. We trust them to keep our fleet in top shape.",
    },
    {
      para: "Shipsmith provided us with a customized ship repair solution that exceeded our expectations. Their attention to detail and commitment to quality were evident throughout the entire project. We are impressed with their professionalism and would gladly work with them again.",
    },
  ];
  return (
    <>
    <div className="container-fluid p-0">
      <video
        autoPlay
        // width="100%"
        // height="100%"
        playsInline
        loop
        muted
        className="video"
        style={{ pointerEvents: "none" }} >
        <source src={video}
        // {video}
         />
        
      </video>
      </div>
    <div className="container-fluid p-0">
      <video
        autoPlay
        width="100%"
        height="100%"
        playsInline
        loop
        muted
        className="videoss"
        style={{ pointerEvents: "none" }} >
        <source src={videoss}
        // {video}
         />
        
      </video>
      </div>

      <div className="container">
            <div className="row">
              <div  
                className="col-sm-6 text-white"
              
                  >
                <h5 className="revive">
                  REVIVE THE WAVES, MASTER THE SHIP:<br/> SHIPSMITH, YOUR VOYAGE TO
                  EXCELLENCE!
                </h5>
                <p className="exper ">
                Shipsmith encapsulates expertise in ship repair services, highlighting
                  {/* <br/>  */}
                  our commitment to excellence in revitalising and optimising ships.
                  {/* <br/>  */}
                  {/* optimising ships. */}
                </p>
                <Link to={"/services"}
                >
                  <Button
                    text="uppercase"
                    padding="10px"
                    border="none"
                    bg="#f9A634"
                    width="175px"
                    ff="inter"
                    fs="13px"
                    className="exp custom_btn "
                    bb="none"
                  >
                    <CiSettings className="me-1" />
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
      </div>
      {/* <div className="bg_home">
        <div className="bg-overlay">
          <div className="container">
            <div className="row p-3">
              <div
                className="col-sm-6 text-white"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                  >
                <h5 className="revive">
                  REVIVE THE WAVES, MASTER THE SHIP: SHIPSMITH, YOUR VOYAGE TO
                  EXCELLENCE!
                </h5>
                <p className="exper">
                  Shipsmith encapsulates expertise in ship repair and marine
                  engineering services, highlighting our commitment to
                  excellence in revitalising and optimising ships.
                </p>
                <Link to={"/services"}>
                  <Button
                    text="uppercase"
                    padding="10px"
                    border="none"
                    bg="#f9A634"
                    width="175px"
                    ff="inter"
                    fs="13px"
                    className="exp custom_btn"
                    bb="none"
                  >
                    <CiSettings className="me-1" />
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid shipment__track">
        <div className=" container mb-5">
          <div className="row upper">
            <div
              className="col-sm-3 my-5"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="20"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <Shipment
                heading={description.heading1}
                para={description.desc1}
              />
            </div>
            <div
              className="col-sm-3  my-5"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="20"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <Shipment
              className="headship2"
                heading={description.heading2}
                para={description.desc2}
              />
            </div>
            <div
              className="col-sm-3 my-5"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="20"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <Shipment
                heading={description.heading3}
                para={description.desc3}
              />
            </div>
            <div
              className="col-sm-3 my-5"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="20"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              {/* <div className="track_shipment p-5">
                <h2 className="mb-3">Track Your Shipment</h2>
                <div
                  style={{ border: "1px solid #Df193c" }}
                  className="mb-4"
                ></div>
                <div className="row">
                  <div className="col-sm-10 p-0">
                    <Input
                      padding="10px"
                      border="none"
                      bg="#ffffff"
                      placeholder="Insert tracking number here..."
                      className="track_input"
                      width="100%"
                    />
                  </div>
                  <div className="col-sm-2 p-0">
                    <Button
                      width="100%"
                      padding="10px"
                      border="none"
                      bg="#f9A634"
                      className="track_btn"
                    >
                      <FaArrowRight />
                    </Button>
                  </div>
                </div>
                <p className="f-13 mb-0 my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </div> */}
              <Shipment
                heading={description.heading4}
                para={description.desc4}
              />  
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5  ">
        <Storybox />
      </div>

      <Companynumbers />

      <div className="solution my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
              <p className="italic text-center mt-2">Solutions We Provide</p>
              <h2 className="text-center fjalla f-49 lh-base" color="#000000">
                From intricate repairs to visionary transformations
              </h2>
              <p className="text-center text-grey">
              Shipsmith offers a comprehensive suite of ship repair solutions, sailing alongside you towards smooth waters and renewed vessel prowess.
              </p>
            </div>
          </div>
          <div className="row">
            {solution1.map((val) => (
              <div
                className="col-sm-3"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                <Solutionbox
                  heading={val.heading}
                  para={val.para}
                  img={val.img}
                />
              </div>
            ))}
          </div>
          {/* <div className="row my-2">
            {solution2.map((val) => (
              <div
                className="col-sm-3"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                <Solutionbox
                  heading={val.heading}
                  para={val.para}
                  img={val.img}
                />
              </div>
            ))}
      
          </div> */}
        </div>
      </div>
      {/* <div className="services_home_bg my-5">
        <div className="company_overlay">
          <div className="container">
            <div className="row p-5">
              <div
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
              </div>
              <div
                className="col-sm-7"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div className="process_text p-4">
                  <h6>Bespoke Ship Refit and Modernization Services</h6>
                  <h4 className="text-white f-49 mb-4">
                    Boosting Maritime Business Performance
                  </h4>
                  <p className="text-white text-grey text-justify">
                    Shipsmith provides comprehensive vessel overhaul and upgrade
                    solutions tailored to meet each client's unique needs and
                    requirements. From advanced electrical and control systems
                    to modernization of cabins, accommodations, and amenities,
                    Shipsmith is committed to delivering high-quality and
                    innovative ship repair and refurbishment services to keep
                    vessels in optimal condition and ensure their long-term
                    sustainability.
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
      </div> */}
      <Business />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 p-5">
            <p className="ourr italic mt-5">Our Competitive Edge</p>
            <h2 className="ourr keep" color="#000000">
              Experience the extensive footprint of ship repair solutions
            </h2>
          </div>
          <div className="col-sm-6 px-4">
            <p className="with text-grey text-justify">
            With a strong focus on quality, innovation, and customer satisfaction, Shipsmith has built a solid reputation as a reliable and efficient provider of ship repair, spare parts procurement and manufacturing solutions.
            </p>
          </div>
        </div>
        <div className="row my-2">
          <div
            className="pair col-sm-6"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <Shiprepair
              img={competitive.img1}
              heading={competitive.heading1}
              para={competitive.para1}
            />
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <Shiprepair
              img={competitive.img2}
              heading={competitive.heading2}
              para={competitive.para2}
            />
          </div>
        </div>
        <div className="row">
          <div
            className="pair col-sm-6"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <Shiprepair
              img={competitive.img3}
              heading={competitive.heading3}
              para={competitive.para3}
            />
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top"
          >
            <Shiprepair
              img={competitive.img4}
              heading={competitive.heading4}
              para={competitive.para4}
            />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <Team />
      </div>
      
      <div className="bg_testimonials mt-3">
        <div className="bg_testimonials_overlay p-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p className="italic" style={{ color: "#f9a634" }}>
                  Testimonials
                </p>
                <h4 className="f-30 text-white fjalla mb-5">
                  What our clients say
                </h4>
                <Carousel
                  showArrows={false}
                  showThumbs={false}
                  showIndicators={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                >
                  {testimonials.map((val) => (
                    <div>
                      <h5 className="testio text-white text-center ">{val.para}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Multicarousel />
      <div>
        <Subscribe />
      </div>
    
    </>
  );
};

export default Home;
