import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import Image from "next/image";
import image from "../../../../Images/section4image.png"
import { WiCloudDown } from "react-icons/wi";
import vector from "../../../../Images/landingpagesection4bg.png"
/**
 * Props for `LandingpageSection4`.
 */
export type LandingpageSection4Props =
  SliceComponentProps<Content.LandingpageSection4Slice>;

/**
 * Component for "LandingpageSection4" Slices.
 */
const LandingpageSection4 = ({
  slice,
}: LandingpageSection4Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
      <div className="section4wrap">
      <Image src={vector} alt="vector" className="section4vector"/>
        <div className="section4heading">
          <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({children}) => (
               <h1 className="section4heading">{children}</h1>
              )
            }} />
          </div>
      <div className="landingpagesection4wrap">
      
        <div className="section4contentwrap">
          
          <div className="section4description">
          <PrismicRichText field={slice.primary.description} components={{
              paragraph: ({children}) => (
                <p className="section4description">{children}</p>
              )
            }} />
          </div>
          <div className="section4subheadingwrap">
              <PrismicRichText field={slice.primary.subheading} components={{
              heading2: ({children}) => (
               <h2 className="section4subheading">{children}</h2>
              )
            }} />
          </div>
          <div className="section4subdescriptionwrap">
            <PrismicRichText field={slice.primary.subdescription} components={{
                paragraph: ({children}) => (
                  <p className="section4subdescription">{children}</p>
                )
              }} />
          </div>
          <div className="section4buttonheadingwrap">
                <div className="section4buttonheading">
                  <p className="section4buttonheading">
                  Download your copy of the Web3 Marketing Guide today!, It’s totally FREE!
                  </p>
                </div>
                <div className="section4buttonwrap">
                  <a href=""><button className="section4button1">Download free PDF  <WiCloudDown /></button></a>
                  <a href=""><button className="section2button2">Book a call</button></a>
                </div>
          </div>
        </div>
        <div className="section4imagewrap">
          <Image src={image} alt="imageaboutus" className="section4image" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default LandingpageSection4;
