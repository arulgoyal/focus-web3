import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import { GoDotFill } from "react-icons/go";
/**
 * Props for `LandingpageSection3`.
 */
export type LandingpageSection3Props =
  SliceComponentProps<Content.LandingpageSection3Slice>;

/**
 * Component for "LandingpageSection3" Slices.
 */
const LandingpageSection3 = ({
  slice,
}: LandingpageSection3Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
      <div className="section3backgroundwrap">
        <div className="section3contentwrap">
          <div className="section3headingwrap">
          <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({children}) => (
               <h1 className="section3heading">{children}</h1>
              )
            }} />
          </div>
          <div className="section3boxescontainer">
              <div className=" grid sm:grid-cols-2 lg:grid-cols-2  gap-x-8 gap-y-8 mx-auto sm:place-items-start place-items-center section3boxgrid">
                  {slice.items.map((item, index) => (
                    <div
                      key={index}
                      className="section3boxstyling"
                    >
                      <div className="section3subheadingwrap">
                        <GoDotFill />
                        <PrismicRichText  field={item.subheading} 
                      components={{
                        heading2: ({children}) => (
                        <h2 className="section3subheading">{children}</h2>
                        )
                      }}/></div>
                      
                      <PrismicRichText field={item.subdescription} 
                      components={{
                        paragraph: ({children}) => (
                        <p className="section3subdescription">{children}</p>
                        )
                      }}/>
                    </div>
                  ))}
              </div>
            
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default LandingpageSection3;
