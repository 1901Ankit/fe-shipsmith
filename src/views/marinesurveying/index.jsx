import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const Marinesurveying = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.marinesurveying.bannerheading1}
        bannerheading2={service.marinesurveying.bannerheading2}
        bannerdescription={service.marinesurveying.bannerdescription}
        pageheading={service.marinesurveying.pageheading}
        pagedescription={service.marinesurveying.pagedescription}
      />
    </div>
  );
};

export default Marinesurveying;
