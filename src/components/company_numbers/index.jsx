import React from "react";
import Circularprogress from "../circleprogressbar";
import { useLocation } from "react-router-dom";
const Companynumbers = () => {
  const Milestones = 80;
  const marine = 8;
  const Worldwide = 60;
  const Years = 25;
  const location = useLocation();

  return (
    <div className="company_numbers my-5">
      <div className="company_overlay">
        <div className="container mt-3">
          <div className="row my-5 compny">
            <div className="col-sm-2  d-grid justify-content-center align-items-center me-5 ">
              <Circularprogress value={Milestones} text={`${Milestones}+`} />

              <h2 className="ke text-white  text-center f-19 mt-2">
                Ships Repaired
              </h2>
            </div>
            <div className="col-sm-2  d-grid justify-content-center align-items-center me-5">
              <Circularprogress value={marine} text={`${marine}+`} />
              <h2 className="kee text-white text-center f-19 mt-2 ">
                Offices & Repair Facilities
              </h2>
            </div>
            <div className="col-sm-2 d-grid justify-content-center align-items-center me-5">
              <Circularprogress value={Worldwide} text={`${Worldwide}+`} />
              <h2 className="ke  text-white text-center f-19 mt-2 ">
                Destination Covered
              </h2>
            </div>
            <div className="col-sm-2  d-grid justify-content-center align-items-center me-5">
              <Circularprogress value={Years} text={`${Years}+`} />
              <h2 className=" ke text-white text-center f-19 mt-2">
                Years of Experience
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companynumbers;
