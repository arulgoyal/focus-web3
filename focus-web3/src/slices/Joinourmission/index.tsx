import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import ellipse1 from "../../../../Images/joinourmissionellipse1.png"
import ellipse2 from "../../../../Images/joinourmissionellipse2.png"
import Image from "next/image";
/**
 * Props for `Joinourmission`.
 */
export type JoinourmissionProps =
  SliceComponentProps<Content.JoinourmissionSlice>;

/**
 * Component for "Joinourmission" Slices.
 */
const Joinourmission = ({ slice }: JoinourmissionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="joinourmission"
    >
      <div className="joinourmissioncontentwrap">
      <Image src={ellipse1} alt ="ellipse1" className="joinourmissionellipse1" />
        <Image src={ellipse2} alt ="ellipse2" className="joinourmissionellipse2" />
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

export default Joinourmission;
