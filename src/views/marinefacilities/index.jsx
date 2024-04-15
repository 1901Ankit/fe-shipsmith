import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const Marinefacilities = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.marinefacilities.bannerheading1}
        bannerheading2={service.marinefacilities.bannerheading2}
        bannerdescription={service.marinefacilities.bannerdescription}
        pageheading={service.marinefacilities.pageheading}
        pagedescription={service.marinefacilities.pagedescription}
      />
    </div>
  );
};

export default Marinefacilities;
