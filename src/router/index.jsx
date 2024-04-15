 import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../views/home";
import Footer from "../components/footer";
import Scroll from "../components/scrolltotop";
import Story from "../views/story";
import ScrollToTop from "../components/scroll";
import Services from "../views/services";
// import VesselModernization from "../views/vessemodernization";
// import Marinefacilities from "../views/marinefacilities";
// import Marinesurveying from "../views/marinesurveying";
import VESSEL_REPAIR_SOLUTIONS from "../views/powercontrol";
import RETROFIT_SOLUTIONS  from "../views/vesselrepair";
import Contact from "../views/contactus";
import SEAMLESS_SUPPLY from "../views/vesselfabrication";
import Liftingservice from "../views/liftingservice";
import VesselInfrastructure from "../views/vesselinfrastructure";
import Subfooter from "../components/subfooter";
import TermsConditions from "../components/Termconditon";
import PrivacyPolicy from "../components/privacypolicy";
import Vesselabout from "../components/vesselabout";
import Retrofit from "../components/retrofit";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        <ScrollToTop />
        <Scroll />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-story" element={<Story />} />
          <Route exact path="/services" element={<Services />} />
          {/* <Route
            exact
            path="/services/vessel-modernization-and-renovation"
            element={<VesselModernization />}
          /> */}
          {/* <Route
            exact
            path={"/services/marine-facilities-and-structures"}
            element={<Marinefacilities />}
          /> */}
          {/* <Route
            exact
            path="/services/marine-surveying-and-inspection-solutions"
            element={<Marinesurveying />}
          /> */}
          <Route
            exact
            path="/services/Vessel-repair-solution"
            element={<VESSEL_REPAIR_SOLUTIONS />}
          />
          <Route
            exact
            path="/services/Retrofit-solutions-and-upgradation-projects-onboard"
            element={<RETROFIT_SOLUTIONS  />}
          />
          <Route
            exact
            path="/services/Seamless-supply-of-spares-to-ships,-rings,-offshore-vessels,-and-port-ancillaries"
            element={<SEAMLESS_SUPPLY />}
          />
          <Route
            exact
            path="/services/workshop-solutions"
            element={<Liftingservice />}
          />
          <Route
            exact
            path="/services/vessel-repair-infrastructure"
            element={<VesselInfrastructure />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/TermsConditions" element={<TermsConditions/>}/>
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route exact path="/vesselabout" element={<Vesselabout/>}/>
          <Route exact path="/Retrofit" element={<Retrofit/>}/>
        </Routes>
        <Footer />
        <Subfooter/>
      </BrowserRouter>
    </div>
  );
};

export default Router;
