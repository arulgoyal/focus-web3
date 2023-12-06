import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="backgroundimagewrap">
        <div className="contentwrap">
          <div className="heading">
            <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({children}) => (
               <h1 className="main-heading">{children}</h1>
              )
            }} />
          </div>
          <div className="body-paragraph">
            <PrismicRichText field={slice.primary.body} components={{
              paragraph: ({children}) => (
                <p className="heading-para">{children}</p>
              )
            }} />
          </div>
          <div className="buttons-box">
            <button className="button-homepage-1"><a href="./">Calendly Appointment</a></button>
            <button className="button-homepage-2"><a href="./">Email</a></button>
          </div>
        </div>
      </div>
      <div className="aboutussectionwrap">
        <div className="aboutcontentwrap">
                             
        </div>
      </div>
    </section>
  );
};

export default Hero;
