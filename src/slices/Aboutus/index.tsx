import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import pageimage from "../../../../Images/aboutus-section-image.png"
import "./index.css"
import ellipse1 from "../../../../Images/aboutusellipse1.png"
import ellipse2 from "../../../../Images/aboutusellipse2.png"
/**
 * Props for `Aboutus`.
 */
export type AboutusProps = SliceComponentProps<Content.AboutusSlice>;

/**
 * Component for "Aboutus" Slices.
 */
const Aboutus = ({ slice }: AboutusProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
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
        <div className="aboutuscontentsection">
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
            <a href=""><button className="aboutusbutton">
            Read More</button></a>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
