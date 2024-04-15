import React from "react";
import logo from "../../assests/logo/ShipSmith Logo Black.png";
import { NavLink } from "react-router-dom";
import "./index.css";
import List from "../list";
import data from "../../assests/data/data";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import Button from "../button";

const Footer = () => {
  let links = [];
  let social_icons = [
    {
      icon: <GrFacebookOption className="be" size={30} />,
    },
    {
      icon: <AiOutlineTwitter className="be" size={30} />,
    },
    {
      icon: <FaYoutube className="be" size={30} />,
    },
    {
      icon: <AiFillInstagram className="be" size={30} />,
    },
    // {
    //   icon: <AiOutlineBehance className="be" size={30} />,
    // },
  ];
  return (
    <div>
      <div className="container-fluid bg-white nn">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 footertext">
              <div className="footertxtinr">
                <NavLink to={"/"}>
                  <img alt="" src={logo} className=" lll shiplogo mb-4" />
                </NavLink>
                <p className="parte text-black">
                In our voyage to excellence, we bring forth a team of highly skilled and experienced maritime professionals, dedicated to delivering unparalleled ship repair and comprehensive services tailored to your unique needs.
                </p>
                
                <div className="social d-flex align-items-center">
                      {social_icons.map((val) => {
                        return <div className="iconss mx-1 ">{val.icon}</div>;
                      })}
                    </div>
              </div>
            </div>

            <div className="col-sm-4 imp">
              <List heading="Important Links" data={data.footerLinks} />
            </div>



            <div className="col-sm-4 p-5 mt-4">
              <h4 className="lettr">News letter</h4>

              <div className="bordered">
                <input
                  className="inputt"
                  type="email"
                  placeholder="Enter your  email..."
                  style={{ padding: "4px", width: "100%" }}
                />
                <Button
                  className="btn_login"
                  text="uppercash"
                  bg="#FFA500"
                  color="black"
                  padding="8px"
                >
                  Submit
                </Button>
              </div>

              <div className="contct">
                <h1 className=" lettr mt-4">Contact</h1>
                <p className="addd">
                  <b>  Address:-</b>
                 
ShipSmith Services Pvt Ltd, 
3WS5D Mani Casadona, Street No 372, Action Area 1, New Town, Kolkata, West Bengal 700156{" "}
                </p>
                <p className="addd">
                  <b>Call Us:-</b> +91-9651679647
                </p>
                <p className="addd">
                  <b>Mail:-</b>info@shipsmith.in 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
