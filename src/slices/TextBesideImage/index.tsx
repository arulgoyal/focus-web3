import Bounded from "@/components/Bounded/Bounded";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import "./index.css"
export type Hero2Props = SliceComponentProps<Content.Hero2Slice>;
import Image from "next/image";

const Hero2 = ({ slice }: Hero2Props): JSX.Element => {
  return (
    
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-fullpage-hero"
    >
      <div
        className={`
            es-fullpage-hero__content
            ${
              slice.variation === "imageRight"
                ? "es-fullpage-hero__image--right"
                : "es-fullpage-hero__image--left"
            }
        `}
      >
        <div>
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              className="es-fullpage-hero__image"
            />
          )}
        </div>

        <div className="es-fullpage-hero__content-right">
          <div className="es-fullpage-hero__content__intro">
            
            {isFilled.richText(slice.primary.title) && (
              <div className="es-fullpage-hero__content__intro__headline">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className="es-fullpage-hero__content__intro__description">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
            {isFilled.link(slice.primary.callToActionLink) && (
              <PrismicNextLink
                className="es-call-to-action__link"
                field={slice.primary.callToActionLink}
              >
                {slice.primary.callToActionLabel || "Learn more…"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          
      `}
      </style>
    </section>
  );
};

export default Hero2;
