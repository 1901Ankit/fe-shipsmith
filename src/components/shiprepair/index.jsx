import React from "react";
const Shiprepair = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <img alt="" src={props.img} />
        </div>
        <div className="col-sm-10">
          <h5>{props.heading}</h5>
          <p className="f-14 text-justify paara">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Shiprepair;
