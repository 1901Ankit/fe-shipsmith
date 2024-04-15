import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";

const workshop_solutions = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.workshop_solutions.bannerheading1}
        bannerheading2={service.workshop_solutions.bannerheading2}
        bannerdescription={service.workshop_solutions.bannerdescription}
        pageheading={service.workshop_solutions.pageheading}
        pagedescription={service.workshop_solutions.pagedescription}
      />
    </div>
  );
};

export default workshop_solutions;
