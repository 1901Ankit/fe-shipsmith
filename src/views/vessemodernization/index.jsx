import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const VesselModernization = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.vesselmodernization.bannerheading1}
        bannerheading2={service.vesselmodernization.bannerheading2}
        bannerdescription={service.vesselmodernization.bannerdescription}
        pageheading={service.vesselmodernization.pageheading}
        pagedescription={service.vesselmodernization.pagedescription}
      />
    </div>
  );
};

export default VesselModernization;
