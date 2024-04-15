import React from "react";
// import "./index.css";
import Subscribe from "../../components/subscribe";
import service2 from "../../assests/images/services/slider-services-2.webp";
const  Vesselabout= () => {
  return (
    <>
      <div className="term_bg">
        <div className="term_overlay">
        <h4 className="f-49 text-white">VESSEL REPAIR SOLUTIONS</h4>
        </div>
      </div>


<div className="container mt-5">
  
    <div className="row">
        <div className="col-sm-12">
        <h3 className="text-blue">
            AFLOAT REPAIR SOLUTIONS
            </h3></div>
    </div>
    <div className="row">
        <div className="col-sm-7">
        <p className="text-justify text-grey f-15">
            Afloat repair solutions will have sub-parts like Mechanical repairs ( Pumps, Valves, Coolers, OWS cleaning and maintenance, Aux Engine debarburizations, Main engine repair and overhaul, compressors,, Hydraulic repairs (Steering gears, Frames, Hydraulic rams and cylinder overhauling, Power pack overhauling /repairs), Electrical repairs ( DBs overhauling/ repairs, Problem in cabling and circuits, New DB's and system installations as per design DWGs, system electrical engineering solutions, Power transmission and utilizations, safety circuits, Alternator, Motor overhauling, Shaft generator repairs, etc ) , Control and automation ( Pneumatic control system repair, automation in systems repairs, Control circuit trouble shooting, instrumentation and controls repairs in engine, AEs, auxiliary machineries, boilers, incinerators, OWS, and other machineries), Piping and fabrications ( Pipeline fabrication and erection, fabrication jobs like steel renewals, B/Hds, penetration work etc), Navigational equipment ( Navigational lights, signals, AIS, GMDSS equipment, PA systems, Eldis lamp repair overhauling, Talkback and feedback system , Fire and safety system repairs ) Deck machineries ( Anchor, chain, windlass, mooring winches, accomodation ladders, , Thermal engineering (HVAC, Refrigeration system), Boiler tube repairs, PV valves and PV braker overhauling, Other Load line items like water tight door repairs, tank vent heads repair, 
            </p>
            <p className="text-justify text-grey f-15">Dry dock repairs- PROPELLER AND SHAFTING, BOW THRUSTER, Rudder overhauling, DYNAMIC BALANCING of rotors, propeller blades, PROPELLER SHAFT built-up and machining, CLADDING, CARPENTRY AND PLUMBING, TANK CLEANING</p>
        </div>
        <div className="col-sm-5 mt-5">
       <img src={service2} width="100%" alt="" />
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-sm-12">
        <h3 className="text-blue">
        DOCKING REPAIR SOLUTIONS
            </h3></div>
    </div>
    <div className="row">
        <div className="col-sm-12">
        <p className="text-justify text-grey f-15">
        Docking Repair Solutions play a pivotal role in maintaining the operational integrity and longevity of ships. These specialized services encompass a range of critical activities that take place when a ship is docked for repair, maintenance, or enhancement. During docking repairs, a ship is carefully maneuverer into a dry dock or slipway, providing a controlled environment for comprehensive inspections and necessary interventions. Highly skilled technicians and engineers of Shipsmith assesses the ship's hull, propellers, rudders, and other submerged components, identifying any signs of wear, corrosion, or damage. This meticulous evaluation guides the repair process, which could involve welding, painting, replacement of worn-out parts, and even advanced retrofitting for performance optimization. From addressing minor structural issues to undertaking extensive overhaul projects, docking repair solutions cater to a wide spectrum of needs, ensuring vessels adhere to international maritime standards and regulations. Docking repairs also provide an opportune time for implementing technology upgrades, enhancing fuel efficiency, and aligning vessels with environmental regulations. These solutions not only restore a ship's seaworthiness but also contribute to its overall efficiency and safety. As maritime transport is the lifeline of global trade, reliable docking repair solutions contribute significantly to minimizing downtime, reducing maintenance costs, and extending a ship's operational lifespan. By partnering with our experienced team, shipowners can ensure that their vessels receive the highest quality of care, guaranteeing safe, smooth, and profitable voyages for years to come. 
            </p>
         
        </div>
    </div>
</div>


     
      <div className="mt-4">
        <Subscribe />
      </div>
    </>
  );
};

export default Vesselabout;
