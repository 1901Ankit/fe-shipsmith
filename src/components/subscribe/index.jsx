import React from "react";
import "./index.css";
import Button from "../button";
import { FaEnvelopeOpenText } from "react-icons/fa";
const Subscribe = () => {
  return (
    <div className="subscribe_bg">
      <div className="subscribe_bg_overlay">
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-8 m-auto text-center">
              <h4 className="f-36 text-white subscribeheading">Sign up for updates</h4>
              <p className="text-white  subscribepara">
                Sign up for updates to receive the latest news, promotions, and
                exclusive content from Shipsmith
              </p>
              <div className="row">
                <div className="col-sm-10 p-0">
                  <input
                    placeholder="Enter your email..."
                    className="subscribe_input"
                  />
                </div>
                <div className="sii col-sm-2 p-0">
                  <Button
                    text="uppercase"
                    padding="12px"
                    width="100%"
                    border="none"
                    className="sign custom_btn"
                    bg="#f9a634"
                    bb="none"
                  >
                    <FaEnvelopeOpenText  className="up me-2"/>
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
