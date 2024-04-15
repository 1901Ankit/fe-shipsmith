import React, { useState } from "react";
import logo from "../../assests/logo/ShipSmith Logo Black.png";
import "./index.css";
import { NavLink } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineTwitter,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsArrowDownRight } from "react-icons/bs";
import Dropdown from "../Dropdown";
const Navbar = () => {
  let [show, setShow] = useState(false);
  const Showhandler = () => {
    setShow(true);
  };

  let links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Our Story",
      url: "/our-story",
    },
    {
      name: "Services",
      url: "/services",
      value: "services",
      icon: <BsArrowDownRight className="ms-2" />,
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  let [services, setServices] = useState(false);

  const handleover = (value) => {
    // setServices(!services);
    value != "services" && setShow(false);

    value == "services" ? setServices(!services) : setServices(false);

    // if (value == "services") {
    //   setServices(true);
    // } else {
    //   setServices(false);
    // }
  };
  const handleclose = () => {};
  // useEffect(() => {
  //   setShow(false);
  // }, []);

  return (
    <div>
      <div class="container-fluid topbarconfluid p-0">
        <div className=" container topbar text-white p-2">
          <div className=" contact__topbar ">
            <div className="me-3">
              <BsFillTelephoneFill className="me-2" />
              <span className="harr f-13">+91-9651679647</span>
            </div>
            <div>
              <GrMail className="me-2" />
              <span className="harr f-13">info@shipsmith.in  </span>
            </div>
          </div>
          <div className="social_icons ">
            <FaFacebookF className="mx-1" />
            <AiOutlineTwitter className="mx-3" />
            <FaLinkedinIn className="mx-1" />
          </div>
        </div>
      </div>

      <div class="container-fluid nav_itemsconfluid">
        {" "}
        <div className="nav_items  container  p-2">
          <div className="logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" className="logo" />
            </NavLink>
          </div>
          <div className="nav__links">
            {links.map((val) => (
              <div>
                <NavLink
                  to={val.url}
                  className="mx-3 nav--links"
                  onMouseOver={() => handleover(val.value)}
                  //  onMouseLeave={() =>setServices(false)}
                >
                  {val.name}
                  {val.icon}
                </NavLink>
              </div>
            ))}
            {services ? <Dropdown setServices={setServices} /> : <></>}
          </div>
          {!show ? (
            <AiOutlineMenu className="menu" onClick={Showhandler} size={30} />
          ) : (
            <AiOutlineClose
              onClick={() => {
                setShow(false);
                setServices(false);
              }}
              size={30}
            />
          )}
        </div>
      </div>
      <div className="navbarfix">
        {show ? (
          links.map((val) => (
            <div className="mobile_links shadow">
              <NavLink
                to={val.url}
                className="mobile__links"
                onClick={() => handleover(val.value)}
              >
                {val.name}
                {val.icon}
              </NavLink>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      {services ? (
        <Dropdown setServices={setServices} setShow={setShow} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
