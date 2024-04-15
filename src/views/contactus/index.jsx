import React from "react";
import "./index.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import Input from "../../components/input";
import Button from "../../components/button";
import Subscribe from "../../components/subscribe";
const Contact = () => {
  let contact = [
    {
      icon: <HiLocationMarker size={30} color="#f9a634" className="icon" />,
      name: "Address",
      value:"ShipSmith Services Pvt Ltd, 3WS5D Mani Casadona, Street No 372, Action Area 1, New Town, Kolkata, West Bengal 700156",
    },
    {
      icon: <BsFillTelephoneFill size={30} color="#f9a634" className="icon" />,
      name: "Call Us",
      value: "+91-9651679647",
    },
    {
      icon: <AiFillMail size={30} color="#f9a634" className="icon" />,
      name: "Mail",
      value: " info@shipsmith.in  ",
    },
  ];
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
    {
      icon: <AiOutlineBehance className="be" size={30} />,
    },
  ];
  return (
    <div>
      <div className="form_border">
        <div className="contact_bg">
          <div className="contact_overlay">
            <h4 className="f-49">GET IN TOUCH</h4>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            {contact.map((val) => (
              <div className="col-sm-4 p-4">
                <div className="shadow contact_us text-center p-3">
                  {val.icon}
                  <h3 className="text-blue my-3">{val.name}</h3>
                  <p className="text-grey mb-0">{val.value}</p>
                  {val.value2 ? (
                    <p className="text-grey">{val.value2}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container pb-5 ">
          <div className="container mb-2 contactus_form">
            <div className="row ">
              <div className="col-sm-12 m-auto">
                <div className="row p-5 d-flex align-items-center justify-content-center ">
                  <div className="col-sm-5 mb-5">  
                    {" "}
                    <p className="italic">Send A Message</p>
                    <h4 className="keep f-49 text-blue">
                      We will be in touch shortly
                    </h4>
                    <p className="text-grey">
                    Email us with any questions or inquiries.
                    </p>
                    <p className="f-45 text-blue"> follow our Social media :</p>
                    <div className="icon_social d-flex align-items-center">
                      {social_icons.map((val) => {
                        return <div className="icons mx-1">{val.icon}</div>;
                      })}
                    </div>
                  </div>
                  <div className="col-sm-7">
                  <form>
                  <div className="row ">
                    <div className="col-sm-6">
                      <div className="d-grid">
                        <label className="labe">Name</label>
                        <Input
                          placeholder="Name"
                          border="1px solid #cdd3d8"
                          className="input py-2"
                          padding="6px 16px"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-grid">
                        <label className="labe">Phone</label>
                        <Input
                          placeholder="Phone"
                          border="1px solid #cdd3d8"
                          className="input py-2"
                          padding="6px 16px"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-sm-6">
                      <label className="labe">Email</label>
                      <Input
                        placeholder="Email"
                        border="1px solid #cdd3d8"
                        className="input py-2"
                        padding="6px 16px"
                        width="100%"
                        
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="labe">Subject</label>
                      <Input
                        placeholder="Subject"
                        border="1px solid #cdd3d8"
                        className="input py-2"
                        padding="6px 16px"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-sm-12">
                      <label className="labe">Message</label>
                      <textarea
                        className="textarea_input"
                        style={{
                          border: "1px solid #cdd3d8",
                          padding: "6px 16px 10px",
                          width: "100%",
                        }}
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-sm-4">
                    <Button
                      className="btn_login"
                      text="uppercash"
                      bg="#FFA500"
                      color="black"
                      padding="10px"
                      width="35% "
                      >
                      SEND MY MESSAGE
                    </Button>
                      </div>
                  </div>
                </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Subscribe />
      </div>
    
    </div>
  );
};

export default Contact;
