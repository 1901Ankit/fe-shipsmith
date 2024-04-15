import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const Service = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.service.bannerheading1}
        bannerheading2={service.service.bannerheading2}
        bannerdescription={service.service.bannerdescription}
        pageheading={service.service.pageheading}
        pagedescription={service.service.pagedescription}
        sendto={'/services'}
      />
    </div>
  );
};

export default Service;
