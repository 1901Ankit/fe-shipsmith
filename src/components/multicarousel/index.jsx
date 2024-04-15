import React from "react";
import Carousel from "react-multi-carousel";
import image1 from "../../assests/images/banner/BlueWhale.svg";
import image2 from "../../assests/images/banner/Frontline.svg";
import image3 from "../../assests/images/banner/SevenIsland.svg";
import image4 from "../../assests/images/clients/Garden reach ship builders and engineers ( GRSE).svg";
import image5 from "../../assests/images/clients/Hooghly cochin shipyard limited.svg";
import image6 from "../../assests/images/clients/Ryfine, China.svg";
import image7 from "../../assests/images/clients/Samships.svg";
import image8 from "../../assests/images/clients/Synergy shipping.svg";
import image9 from "../../assests/images/clients/Tamar ship management and groups..svg";
import image10 from "../../assests/images/clients/Udupi cochin shipyard limited.svg";
import image11 from "../../assests/images/clients/Arka ship management..svg";
import image12 from "../../assests/images/clients/Cochin shipyard limited.svg";
import image13 from "../../assests/images/clients/Fleet management..svg";

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
    {
      img: image9,
    },
    {
      img: image10,
    },
    {
      img: image11,
    },
    {
      img: image12,
    },
    {
      img: image13,
    },
  ];
  return (
    <div className="">
      <div className="client_bg ">
        <div className="container p-5 logoclient">
          <div className="row mb-4">
            <div className="col-sm-12 text-center">
              <h5>Our Clients</h5>
            </div>
          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            className="text-center"
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
          >
            {images.map((val) => (
              <img src={val.img} alt="" height={40} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Multicarousel;
