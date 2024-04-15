import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Subfooter = () => {
  const navigate = useNavigate();

  const TermsCondition = () => {
    navigate("/TermsConditions");
  };
  const PrivacyPolicy = () => {
    navigate("/PrivacyPolicy");
  };
  return (
    <div className="subfooter">
      <div className="container-fluid m-auto">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright_wrapper">
                <div className="nana">
                  Copyright &#169; <a href="/" className="link_shipsmith me-1">Shipsmith</a>
                  {new Date().getFullYear()} All Rights Reserved
                </div>
                <div className="d-flex align-items-center hah">
                  <p className="m-0 pointer gaga" onClick={TermsCondition}>
                    {" "}
                    | Terms & Conditions
                  </p>
                  <p className="gaga m-0 pointer" onClick={PrivacyPolicy}>
                    | Privacy Policy{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
