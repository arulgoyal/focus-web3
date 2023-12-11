import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import image from "../../../../Images/section2imagewrap.png"
import Image from "next/image";
import "./index.css"
import vector from "../../../../Images/landingpagesection2vector.png"
import dot from "../../../../Images/section2dot.png"
import linevector from "../../../../Images/section2linevector.png"
import { WiCloudDown } from "react-icons/wi";
/**
 * Props for `Landingpagesection2`.
 */
export type Landingpagesection2Props =
  SliceComponentProps<Content.Landingpagesection2Slice>;

/**
 * Component for "Landingpagesection2" Slices.
 */
const Landingpagesection2 = ({
  slice,
}: Landingpagesection2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="landingpagesection2wrap">
        <div className="section2contentwrap">
          <Image src={linevector} alt="linevector" className="section2linevector" />
          <div className="section2heading">
          <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({children}) => (
               <h1 className="section2heading">{children}</h1>
              )
            }} />
          </div>
          <div className="section2description">
          <PrismicRichText field={slice.primary.description} components={{
              paragraph: ({children}) => (
                <p className="section2description">{children}</p>
              )
            }} />
          </div>
          <div className="section2vector">
            <Image src={vector} alt="vector" className="section2vector" />
          </div>
          <div className="subcontentwrap">
            <div className="section2subheadingwrap">
              <div className=""><Image src={dot} alt="dot" className="section2dot" /></div>
              <PrismicRichText field={slice.primary.subheading} components={{
              heading2: ({children}) => (
               <h2 className="section2subheading">{children}</h2>
              )
            }} />
            </div>
            <PrismicRichText field={slice.primary.subdescription} components={{
              paragraph: ({children}) => (
                <p className="section2subdescription">{children}</p>
              )
            }} />
          </div>
          <div className="section2buttonwrap">
            <a href=""><button className="section2button1">Download free PDF  <WiCloudDown /></button></a>
            <a href=""><button className="section2button2">Book a call</button></a>
          </div>
        </div>
        <div className="section2imagewrap">
          <Image src={image} alt="imageaboutus" className="section2image" />
        </div>
      </div>
    </section>
  );
};

export default Landingpagesection2;
