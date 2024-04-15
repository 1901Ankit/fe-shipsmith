import React from "react";
import prashant from "../../assests/images/banner/prashantgyan.jpg";
import piyush from "../../assests/images/banner/PIYUSH_KUMAR.jpg";
import hari from "../../assests/images/banner/Hari.jpg";
import gary from "../../assests/images/banner/Gary.jpg";
const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center mt-5">
          <h4 className="italic mt-5">Our Team</h4>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-8 m-auto">
          <h2 className="keep  text-center" color="#000000">
            A group of highly skilled and experienced marine engineers and
            experts
          </h2>
          <p className="text-grey text-center">
          Providing premium ship repair and comprehensive solutions to clients globally.
          </p>
        </div>
      </div>

      <div className="row my-4">
        <div
          className="col-sm-4  p-3 mb-5 prs"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="row team_section shadow operat">
            <div className="col-sm-4 col-lg-4 col-md-6 m-auto">
              
              <img alt="" src={hari} className="image"/>
            </div>
            <div className="col-sm-8 col-lg-12 col-md-4 m-auto">
           
              <h4 className="kum mt-3"color="#000000">Hari Shankar</h4>
              <p className="f-13">Founder & Head of Operations</p>

              <p className="text-justify text-grey f-13  pras">
              Hari Shankar is a dynamic entrepreneur with extensive experience in diverse sectors, ranging from logistics and engineering to manufacturing and technology. With a deep-rooted passion for entrepreneurship, Hari has successfully managed and led various ventures throughout their career. Currently, as the Managing Director of Shipsmith, Hari oversees the operations and ensures the seamless execution of projects.
              </p>
            </div>
          </div>
        </div>

        <div
          className="col-sm-4  p-3 mb-5 prs piyu"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="row team_section shadow operat">
            <div className="col-sm-4 col-lg-4 col-md-6 m-auto">
            <img alt="" src={prashant}className="image" />
          
            </div>
            <div className="col-sm-8 col-lg-12 col-md-4 ">
            <h4 className="kum mt-3" color="#000000">Prashant Gyan</h4>
              <p className="f-13">Founder & Director</p>
              <p className="text-justify text-grey f-12 pras">
                Prashant Gyan is a highly accomplished entrepreneur with a
                vast experience in different sectors, including shipping,
                engineering, and technology. Over the years, Prashant worked
                for several other companies, honing his expertise in marine
                engineering and ship repair, and eventually founded his own
                venture, Shipsmith. Under his leadership, Shipsmith has become a
                leading provider of ship repair and marine engineering
                solutions, offering a wide range of services.
              </p>
            </div>
          </div>
        </div>
        
        <div
          className="col-sm-4  p-3 mb-5 prs"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="row team_section shadow operat">
            <div className="col-sm-4 col-lg-4 col-md-6 m-auto">
              
              <img alt="" src={gary} className="image"/>
            </div>
            <div className="col-sm-8 col-lg-12 col-md-4 m-auto">
              <h4 className="kum mt-3"color="#000000">G.Rakesh</h4>
              <p className="f-13">Chief Engineer</p>

              <p className="text-justify text-grey f-12  pras">Rakesh, with over 21 years of professional experience in technical and operations management, is a highly skilled Chief Engineer in the marine sector. His expertise lies in the management and operation of Gas Tankers, Oil Tankers, and General Cargo Vessels, providing marine engineering solutions to ensure their smooth functioning. Currently, he holds the position of Chief Engineer at "Shipsmith," a renowned company specialising in ship repair and marine engineering services.
            
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-11 m-auto">
        <div className="row my-4 ">
          <div className="col-sm-5 mb-3">
            <div className="row team_section shadow operat">
              <div className="col-sm-4 col-lg-4 col-md-6 m-auto">
                <img alt="" src={hari} className="image" />
              </div>
              <div className="col-sm-8 col-lg-12 col-md-4 m-auto">
                <h4 className="kum mt-3" color="#000000">
                  Hari Shankar
                </h4>
                <p className="f-13">Founder & Head of Operations</p>

                <p className="text-justify text-grey f-12  pras">
                  Hari Shankar is a dynamic entrepreneur with extensive
                  experience in diverse sectors, ranging from logistics and
                  engineering to manufacturing and technology. With a
                  deep-rooted passion for entrepreneurship, Hari has
                  successfully managed and led various ventures throughout their
                  career. Currently, as the Managing Director of Shipsmith, Hari
                  oversees the operations and ensures the seamless
                  execution of projects.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-5 mb-3">
            <div className="row team_section shadow">
              <div className="col-sm-4 col-lg-4 col-md-6 m-auto">
                <img alt="" src={prashant} className="image" />
              </div>
              <div className="col-sm-8 col-lg-12 col-md-4 m-auto">
                <h4 className="kum mt-3" color="#000000">
                  Prashant Gyan
                </h4>
                <p className="f-13">Founder & Director</p>
                <p className="text-justify text-grey f-12 pras">
                  Prashant Gyan is a highly accomplished entrepreneur with a
                  vast experience in different sectors, including shipping,
                  engineering, and technology. Over the years, Prashant worked
                  for several other companies, honing his expertise in marine
                  engineering and ship repair, and eventually founded his own
                  venture, Shipsmith. Under his leadership, Shipsmith has become
                  a leading provider of ship repair and marine engineering
                  solutions, offering a wide range of services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Team;
