import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import { WiCloudDown } from "react-icons/wi";
/**
 * Props for `LandingpageHero`.
 */
export type LandingpageHeroProps =
  SliceComponentProps<Content.LandingpageHeroSlice>;

/**
 * Component for "LandingpageHero" Slices.
 */
const LandingpageHero = ({ slice }: LandingpageHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="landingpagebackgroundimagewrap">
        <div className="landingpageherocontentwrap">
          <div className="landingpageheroheading">
            <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({children}) => (
               <h1 className="landingpageheromain-heading">{children}</h1>
              )
            }} />
          </div>
          <div className="landingpageherobody-paragraph">
            <PrismicRichText field={slice.primary.description} components={{
              paragraph: ({children}) => (
                <p className="landingpageheroheading-para">{children}</p>
              )
            }} />
          </div>
          <div className="landingpageherobuttons-box">
            <button className="landingpageherobutton-homepage-1">Download free PDF  <WiCloudDown /></button>
            <button className="landingpageherobutton-homepage-2">Book a Call</button>
          </div>
        </div>
      </div>
      <div className="landingpageheroaboutussectionwrap">
        <div className="landingpageheroaboutcontentwrap">
                             
        </div>
      </div>
    </section>
  );
};

export default LandingpageHero;
