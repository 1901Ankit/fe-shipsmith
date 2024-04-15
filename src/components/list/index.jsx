import React from "react";
import { NavLink } from "react-router-dom";
import {FiLink} from "react-icons/fi";

const List = (props) => {
  return (
    <div>
      
      <h5 className="mb-3 fs-13">{props.heading}</h5>
      <ul className="list-unstyled mt-4 ">
        {props.data.map((val, i) => (
          <li className="mb-2 ">
            <FiLink className="filinkk "  />
            {val.url ? (
               <NavLink to={val.url} 
               className="link mb-3">
                {val.name}
              </NavLink>
            ) : (
              val.name
            )}
          </li>
        ))}
      </ul>
    </div>
   
  );
};

export default List;
