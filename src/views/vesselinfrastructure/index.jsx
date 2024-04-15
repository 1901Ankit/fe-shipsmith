import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const VesselInfrastructure = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.vesselinfrastructure.bannerheading1}
        bannerheading2={service.vesselinfrastructure.bannerheading2}
        bannerdescription={service.vesselinfrastructure.bannerdescription}
        pageheading={service.vesselinfrastructure.pageheading}
        pagedescription={service.vesselinfrastructure.pagedescription}
      />
    </div>
  );
};

export default VesselInfrastructure;
