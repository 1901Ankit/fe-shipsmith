import React from "react";
import Servicepage from "../../components/servicespages";
import service from "../../assests/data/service";
import Button from "../../components/button";

const RETROFIT_SOLUTIONS  = () => {
  return (
    <div>
      <Servicepage
        bannerheading={service.RETROFIT_SOLUTIONS.bannerheading1}
        bannerheading2={service.RETROFIT_SOLUTIONS.bannerheading2}
        bannerdescription={service.RETROFIT_SOLUTIONS.bannerdescription}
        pageheading={service.RETROFIT_SOLUTIONS.pageheading}
        pagedescription={service.RETROFIT_SOLUTIONS.pagedescription}  
        sendto ={'/Retrofit'}
        />
       
    </div>
  );
};

export default RETROFIT_SOLUTIONS;
