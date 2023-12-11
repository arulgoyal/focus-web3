"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import pageimage from "../../../../Images/aboutus-section-image.png"
import "./index.css"
import ellipse1 from "../../../../Images/aboutusellipse1.png"
import ellipse2 from "../../../../Images/aboutusellipse2.png"
import React, { useState, useEffect } from "react";
import trophy from "../../../../Images/contactustickvector.png"
// import Modal from "react-modal";
/**
 * Props for `Aboutus`.
 */
export type AboutusProps = SliceComponentProps<Content.AboutusSlice>;

/**
 * Component for "Aboutus" Slices.
 */
const Aboutus = ({ slice }: AboutusProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} id="aboutus"
    >
      <div className="aboutussectioncontentwrap">
        <Image src={ellipse1} alt ="ellipse1" className="aboutusellipse1" />
        <Image src={ellipse2} alt ="ellipse2" className="aboutusellipse2" />
        <div className="headingwrap">
        <PrismicRichText field={slice.primary.heading} components={{
                      heading1: ({children}) => (
                      <h1 className="aboutusheading">{children}</h1>
                      )
                    }}/>
        </div>
        
        {showModal ? (
        <div className="mt-0 flex justify-center items-center flex-col w-[100%] rounded-lg shadow-xl h-auto p-2 gap-5">
          
          <div className="aboutusimagewrap">
            <Image src={pageimage} alt="aboutusimage" className="aboutusimage" />
          </div>
          <PrismicRichText field={slice.primary.extendeddescription} components={{
          paragraph: ({children}) => (
            <p className="aboutusdescription extendeddescription text-center">{children}</p>
          )
        }} />
          <button
            className="aboutusbutton"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : <div className="aboutuscontentsection">
      <div className="aboutusimagewrap">
        <Image src={pageimage} alt="aboutusimage" className="aboutusimage" />
      </div>
      <div className="aboutuscontent">
        <PrismicRichText field={slice.primary.heading} components={{
                    heading1: ({children}) => (
                    <h1 className="aboutusheadingn">{children}</h1>
                    )
                  }}/>
        <PrismicRichText field={slice.primary.description} components={{
          paragraph: ({children}) => (
            <p className="aboutusdescription">{children}</p>
          )
        }} />
        <button className="aboutusbutton" onClick={() => setShowModal(true)}>
        Read More</button>
      
      </div>
    </div>}
      </div>
    </section>
  );
};

export default Aboutus;
