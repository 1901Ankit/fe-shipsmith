import React from "react";
import "./index.css";
import Button from "../button";
import { Link } from "react-router-dom";
const Shipment = (props) => {
  return (
  
    <div className="shipment shadow">
      <h3 className="shipment_heading ">{props.heading}</h3>
      <p className="shipment_desc ">{props.para}</p>
     
     <div className="knowmore">
      <Link to={"/services"}>
        <Button
          className=" shipment_btn"
          text="uppercase"
          border="none"
          bb="1px solid transparent"
          bg="transparent"
          fs="12px"
          ff="inter"
          color="#ec2027"
          >
          KNOW MORE
        </Button>
      </Link>
      </div>
          </div>
    
  );
};

export default Shipment;
