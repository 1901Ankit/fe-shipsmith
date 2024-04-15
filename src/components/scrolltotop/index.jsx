import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  let [show, setShow] = useState(false);

  const scrolltotop = () => {
    window.scrollTo(0, 0);
    window.location.reload(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.pageYOffset > 50));
  });
  return (
    <div>
      {show ? (
        <div className="scroll_up " onClick={scrolltotop}>
          <FaArrowUp />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Scroll;
