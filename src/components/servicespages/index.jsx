import React from "react";
import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsArrowUpRight, BsFillTelephoneFill } from "react-icons/bs";
import Button from "../button";
import service1 from "../../assests/images/services/slider-services-1.webp";
import service2 from "../../assests/images/services/slider-services-2.webp";
import Business from "../businessperformance";
import FAQ from "../Accordion";
import data from "../../assests/data/data";
import Subscribe from "../subscribe";
import Aos from "aos";
const Servicepage = (props) => {
  Aos.init();

  let services = [
    // {
    //   name: "Vessel Modernization and Renovation",
    //   url: "/services/vessel-modernization-and-renovation",
    //   icon: <BsArrowUpRight />,
    // },
    // {
    //   name: "Marine Facilities and Structures",
    //   url: "/services/marine-facilities-and-structures",
    //   icon: <BsArrowUpRight />,
    // },
    // {
    //   name: "Marine Surveying and Inspection Solutions",
    //   url: "/services/marine-surveying-and-inspection-solutions",
    //   icon: <BsArrowUpRight />,
    // },
    {
      name: "VESSEL REPAIR SOLUTIONS",
      url: "/services/Vessel-repair-solution",
      icon: <BsArrowUpRight />,
    },
    {
      name: "RETROFIT SOLUTIONS AND UPGRADATION PROJECTS ONBOARD",
      url: "/services/Retrofit-solutions-and-upgradation-projects-onboard",
      icon: <BsArrowUpRight />,
    },
    {
      name: "SEAMLESS SUPPLY OF SPARES TO SHIPS, RIGS, OFFSHORE VESSELS, AND PORT ANCILLARIES",
      url: "/services/Seamless-supply-of-spares-to-ships,-rings,-offshore-vessels,-and-port-ancillaries",
      icon: <BsArrowUpRight />,
    },
    {
      name: "WORKSHOP SOLUTIONS",
      url: "/services/workshop-solutions",
      icon: <BsArrowUpRight />,
    },
    // {
    //   name: "Vessel Repair Infrastructure",
    //   url: "/services/vessel-repair-infrastructure",
    //   icon: <BsArrowUpRight />,
    // },
  ];
  let navigate = useNavigate();
  let clickhandler =()=>{
    navigate(props.sendto);    
  }
  console.log("clicked ",props.sendto);
  return (
    <div>
      <div className="services_bg">
        <div className="services_overlay">
          <div className="container">
            <div className="row py-5">
              <div className="col-sm-6">
                <p className="serv italic" style={{ color: "#f9a634" }}>
                  Services
                  {/* {props.bannerheading} */}
                </p>
                <h5 className="craft f-36 text-white">
                  {/* {props.bannerheading2}
                   */}
                  CRAFTING EXCEPTIONAL SHIPS, DELIVERING UNPARALLELED SERVICE
                </h5>
                <p className="letus text-white">
                  {/* {props.bannerdescription} */}
                  Let us take the helm and navigate your shipbuilding journey
                  with precision, passion, and perfection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className=" ourserviceslist col-sm-3">
            <h3 className="text-blue">Our Services</h3>
            {services.map((val) => (
              <NavLink className="our-services my-2" to={val.url}>
                {val.name}
                {val.icon}
              </NavLink>
            ))}
            <div className="need_help my-3 p-3">
              <div>
                <h4 className="text-blue">Want Support?</h4>
                <p className="f-16">We’re Here To Help You!</p>
                <Link to={"/contact"}>
                  <Button
                    bg="#f9a634"
                    bb="none"
                    border="none"
                    padding="10px"
                    text="uppercase"
                    className="help_btn"
                  >
                    <BsFillTelephoneFill className="me-2" />
                    contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-7">
            <h3 className="text-blue">{props.pageheading}</h3>
            <p className="text-justify text-grey f-15">
              {props.pagedescription}
            </p>
            {
props.sendto == "/services" ? "" : 
              <Link to={props.sendto}>
              <Button
                bg="#f9a634"
                bb="none"
                border="none"
                padding="10px"
                text="uppercase"
                className="help_btn"
                // onClick={clickhandler}
                >
                Know More
              </Button>
            </Link>
              }
            <div className="row my-4">
              <div className="col-sm-6 servi">
                <img src={service1} width="100%" alt="" />
              </div>
              <div className="col-sm-6">
                <img src={service2} width="100%" alt="" />
              </div>
            </div>

            <div>
              <h4 className="text-blue">Upsides of Shipsmith Services</h4>
              <p className="text-grey">
                Shipsmith offers a comprehensive suite of ship repair solutions,
                sailing alongside you towards smooth waters and renewed vessel
                prowess.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="benefits_list my-2">
                    High-quality ship repair solutions
                  </li>
                  <li className="benefits_list my-2">
                    Experience team of marine engineers
                  </li>
                  <li className="benefits_list my-2">
                    Collaborative approach for your specific requirements
                  </li>
                  <li className="benefits_list my-2">
                    Expertise in all sorts of repairs, spare parts
                    manufacturing, and much more
                  </li>
                  <li className="benefits_list my-2">
                    Attention to detail and precision
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="benefits_list my-2">
                    Cutting-edge ship repairing technology
                  </li>
                  <li className="benefits_list my-2">
                    Use of high-quality materials
                  </li>
                  <li className="benefits_list my-2">
                    Commitment to deliver exceptional results
                  </li>

                  <li className="benefits_list my-2">
                    Customer satisfaction and service excellence
                  </li>
                  <li className="benefits_list my-2">
                    Comprehensive ship repair and spares manufacturing solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Business />
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-4 p-4">
            <p className="italic">Knowledge Base</p>
            <h2 className="text-blue f-44 fjalla">
              Frequently Asked Questions
            </h2>
            <p className="find f-18">
              Find answers to frequently asked questions about Shipsmith
              services
            </p>
            <div className="need_help my-3 p-3">
              <div>
                <h4 className="want text-blue">Want Support?</h4>
                <p className="want f-16">We’re Here To Help You!</p>
                <Link to={"/contact"}>
                  <Button
                    bg="#f9a634"
                    bb="none"
                    border="none"
                    padding="10px"
                    text="uppercase"
                    className="want help_btn"
                  >
                    <BsFillTelephoneFill className="me-2" />
                    contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <FAQ data={data.faq} />
          </div>
        </div>
      </div>
      <div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Servicepage;
