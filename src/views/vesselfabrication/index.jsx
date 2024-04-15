import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const SEAMLESS_SUPPLY = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.SEAMLESS_SUPPLY.bannerheading1}
        bannerheading2={service.SEAMLESS_SUPPLY.bannerheading2}
        bannerdescription={service.SEAMLESS_SUPPLY.bannerdescription}
        pageheading={service.SEAMLESS_SUPPLY.pageheading}
        pagedescription={service.SEAMLESS_SUPPLY.pagedescription}
      />
    </div>
  );
};

export default SEAMLESS_SUPPLY;
