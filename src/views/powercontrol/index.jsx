import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";
// import Button from "../../components/button";

const VESSEL_REPAIR_SOLUTIONS = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.VESSEL_REPAIR_SOLUTIONS.bannerheading1}
        bannerheading2={service.VESSEL_REPAIR_SOLUTIONS.bannerheading2}
        bannerdescription={service.VESSEL_REPAIR_SOLUTIONS.bannerdescription}
        pageheading={service.VESSEL_REPAIR_SOLUTIONS.pageheading}
        pagedescription={service.VESSEL_REPAIR_SOLUTIONS.pagedescription}
        sendto ={'/vesselabout'}
        />
          
    </div>
  );
};

export default VESSEL_REPAIR_SOLUTIONS;
