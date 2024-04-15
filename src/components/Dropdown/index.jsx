import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const Dropdown = (props) => {
   

  let links = [
    // {
    //   name: "Vessel Modernization and Renovation",
    //   url: "/services/vessel-modernization-and-renovation",

    // },
    // {
    //     name: "Marine Facilities and Structures",
    //     url: "/services/marine-facilities-and-structures",
    
    // },
    // {
    //     name: "Marine Surveying and Inspection Solutions",
    //     url: "/services/marine-surveying-and-inspection-solutions",
    
    
    //   },
      {
        name: "VESSEL REPAIR SOLUTIONS",
        url:"/services/Vessel-repair-solution",
        
      },
      {
        name: "RETROFIT SOLUTIONS AND UPGRADATION PROJECTS ONBOARD",
        url: "/services/Retrofit-solutions-and-upgradation-projects-onboard",
        
    
      },
      {
        name: "SEAMLESS SUPPLY OF SPARES TO SHIPS, RIGS, OFFSHORE VESSELS, AND PORT ANCILLARIES",
        url: "/services/Seamless-supply-of-spares-to-ships,-rings,-offshore-vessels,-and-port-ancillaries",
        
    
      },
      {
        name: "WORKSHOP SOLUTIONS",
        url:  "/services/workshop-solutions",
        
    
      },
      // {
      //   name: "Vessel Repair Infrastructure",
      //   url: "/services/vessel-repair-infrastructure",
    
    
      // },
  ];
  return (
    <div onMouseLeave={()=>{props.setServices(false)}}>
        <div class="services_link_head">
      {links.map((val) => (
        <NavLink to={val.url} onClick={()=>{props.setServices(false);
          props.setShow(false)}} className="links_services ">{val.name} </NavLink>
      ))}
      </div>
    </div>
  );
};

export default Dropdown;
