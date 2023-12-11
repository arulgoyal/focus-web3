import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import tickvector from "../../../../Images/contactustickvector.png"
import ellipse1 from "../../../../Images/contactusellipse1.png"
import ellipse2 from "../../../../Images/contactusellipse2.png"
import Image from "next/image";
/**
 * Props for `ContactUs`.
 */
export type ContactUsProps = SliceComponentProps<Content.ContactUsSlice>;

/**
 * Component for "ContactUs" Slices.
 */
const ContactUs = ({ slice }: ContactUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="contactus"
    >
      <div className="contactussectionwrap">
      <Image src={ellipse1} alt ="ellipse1" className="contactusellipse1" />
        <Image src={ellipse2} alt ="ellipse2" className="contactusellipse2" />
        <div className="contactusheadingwrap">
        <PrismicRichText field={slice.primary.heading} components={{
                  heading1: ({children}) => (
                  <h1 className="contactusheading">{children}</h1>
                  )
                }}/>
        </div>
        <div className="contactuscontentsection">
          <div className="contactuscontentsectionpart1">
          <PrismicRichText field={slice.primary.subheading} components={{
                  heading2: ({children}) => (
                  <h2 className="contactussubheading">{children}</h2>
                  )
                }}/>
          <PrismicRichText field={slice.primary.description} components={{
                  paragraph: ({children}) => (
                  <p className="contactusdescription">{children}</p>
                  )
                }} />
          <div className="faeturesbox">
                        {slice.items.map((item,index) => (
                          <div key={index} className="featuresboxstyling">
                            <Image src={tickvector} alt='tickvector'className='tickvector' /><PrismicRichText field={item.features} 
                            components={{
                              heading4: ({children}) => (
                              <h4 className="contactusfeaturesfont">{children}</h4>
                              )
                            }}/>
                          </div>
                        ))}
                    </div>
            
          </div>
          <div className="contactuscontentsectionpart2">
            <div className="formwrap">
              <form action="" className="formbox">
                <input type="text" placeholder="Enter Your Name" className="name font" />
                <input type="text" placeholder="Enter Your email address" className="email font"/>
                <textarea name="Enter your message" id="" className="message font" placeholder="Enter Your Message"></textarea>
                {/* <input type="text" placeholder="Enter Your message" className="message font" /> */}
                <button className="contactusbutton">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactUs;
