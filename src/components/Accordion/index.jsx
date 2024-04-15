import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./index.css";
const FAQ = (props) => {
  return (
    <div>
      <Accordion transition={{ duration: "400ms" }} className="my-3">
        {props.data.map((val, i) => (
          <AccordionItem>
            {({ open }) => (
              <>
                <AccordionHeader
                  className={`${
                    open ? "accordion__header mt-3" : "accordion_header mt-3"
                  }`}
                >
                  {val.question}
                  <div className="accordion_icon">
                    {open ? (
                      <AiOutlineMinus color="#ec2027" />
                    ) : (
                      <AiOutlinePlus color="#000000" />
                    )}
                  </div>
                </AccordionHeader>
                <AccordionBody
                  className={`${
                    open ? "accordion__body  " : " accrodion_body"
                  }`}
                >
                  {val.answer}
                </AccordionBody>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
