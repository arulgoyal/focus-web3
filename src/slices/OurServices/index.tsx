import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import Image from "next/image";
import ourimage from "../../../../Images/ourservices-section-image.png"
import { PrismicNextLink } from "@prismicio/next";
import vector2 from "../../../../Images/ourservicesbackgroundvector2.png"
/**
 * Props for `OurServices`.
 */
export type OurServicesProps = SliceComponentProps<Content.OurServicesSlice>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices = ({ slice }: OurServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
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
            <PrismicRichText field={item.description} 
            components={{
              paragraph: ({children}) => (
              <p className="box-description">{children}</p>
              )
            }}/>
            <PrismicNextLink field={item.readmorelink} className="linkbox">Read More</PrismicNextLink>
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
