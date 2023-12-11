"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import Image from "next/image";
import ourimage from "../../../../Images/ourservices-section-image.png"
import { PrismicNextLink } from "@prismicio/next";
import vector2 from "../../../../Images/ourservicesbackgroundvector2.png"
import { useState } from "react";
/**
 * Props for `OurServices`.
 */
export type OurServicesProps = SliceComponentProps<Content.OurServicesSlice>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices = ({ slice }: OurServicesProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="ourservice"
    >
      <div className="ourservicescontentwrap">
        <Image src={vector2} className="vector2" alt="vector2"></Image>
        <div className="headingwrap">
          <PrismicRichText field={slice.primary.heading} components={{
                  heading1: ({children}) => (
                  <h1 className="main-heading1">{children}</h1>
                  )
                }}/>
        </div>
        <div className="ourservicescontentcontainer">
          <div className="ourservicesimagecontainer">
            <Image src={ourimage} alt=""></Image>
          </div> 
          <div className="ourservicesboxescontainer">
            <div className="">
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-8 mx-auto sm:place-items-start place-items-center boxgrid">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="boxstyling"
          >
            <PrismicRichText  field={item.subheading} 
            components={{
              heading2: ({children}) => (
              <h2 className="box-subheading">{children}</h2>
              )
            }}/>
            {showModal ?(
              <div className="boxstyling">
              <PrismicRichText field={item.extendeddescription} 
              components={{
                paragraph: ({children}) => (
                <p className="box-description">{children}</p>
                )
              }}/>
              <button className="linkbox" onClick={() => setShowModal(false)}>Read Less</button>
              </div>
            ):<div className="boxstyling">
              <PrismicRichText field={item.description} 
              components={{
                paragraph: ({children}) => (
                <p className="box-description">{children}</p>
                )
              }}/>
              <button className="linkbox" onClick={() => setShowModal(true)}>Read More</button>
              </div>}
            
           
          </div>
        ))}
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
