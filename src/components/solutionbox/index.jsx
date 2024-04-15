import React from "react";
import "./index.css";
import Button from "../button";
import { Link } from "react-router-dom";
const Solutionbox = (props) => {
  return (
    <div>
      <div className="shadow solution_box mb-3">
        <div style={{ overflow: "hidden", position: "relative" }}>
          <img src={props.img} width="100%" className="image_hover" alt="" />
        </div>
        <h4 className="f-18 text-left px-3 my-3">{props.heading}</h4>
        <p className="para text-justify px-3 text-grey">{props.para}</p>
        <div className="text-center more">
          <Link to={'/services'}>
            <Button
              bg="#f9a634"
              className="solknow custom_btn"
              border="none"
              bb="none"
              fs="14px"
              padding="5px"
            >
              KNOW MORE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutionbox;
