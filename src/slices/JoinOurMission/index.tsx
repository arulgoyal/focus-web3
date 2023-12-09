import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `JoinOurMission`.
 */
export type JoinOurMissionProps =
  SliceComponentProps<Content.JoinOurMissionSlice>;

/**
 * Component for "JoinOurMission" Slices.
 */
const JoinOurMission = ({ slice }: JoinOurMissionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="joinourmissioncontentwrap">
      <PrismicRichText field={slice.primary.heading} components={{
                  heading1: ({children}) => (
                  <h1 className="joinourmissionheading">{children}</h1>
                  )
                }}/>
      <PrismicRichText field={slice.primary.description} components={{
                  paragraph: ({children}) => (
                  <p className="joinourmissiondescription">{children}</p>
                  )
                }}/>
      <PrismicRichText field={slice.primary.subheading} components={{
                  heading2: ({children}) => (
                  <h2 className="joinourmissionsubheading">{children}</h2>
                  )
                }}/>
      <PrismicNextLink field={slice.primary.buttonlink}><button className="joinourmissionbutton">Download Now</button></PrismicNextLink>
      <PrismicRichText field={slice.primary.subdescription} components={{
                  paragraph: ({children}) => (
                  <p className="joinourmissionsubdescription">{children}</p>
                  )
                }}/>
      </div>
    </section>
  );
};

export default JoinOurMission;
