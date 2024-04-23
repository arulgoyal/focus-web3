import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import Image from "next/image";
import image1 from "../../../../Images/web3marketing1.png"
import image2 from "../../../../Images/web3marketing2.png"
import radial from "../../../../Images/web3radialvector.png"
import ellipse from "../../../../Images/web3marketingellipse.png"
/**
 * Props for `Web3MarketingGuide`.
 */
export type Web3MarketingGuideProps =
  SliceComponentProps<Content.Web3MarketingGuideSlice>;

/**
 * Component for "Web3MarketingGuide" Slices.
 */
const Web3MarketingGuide = ({
  slice,
}: Web3MarketingGuideProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="web3marketingguide"
    >
      <div className="web3marketingcontentwrap">
      <Image src={ellipse} alt ="ellipse1" className="web3marketingellipse1" />
        {/* <Image src={radial} alt="radial" className="radial" /> */}
        <div className="radial">
          
        </div>
        <div className="web3marketingmainheading">
        <PrismicRichText field={slice.primary.heading} components={{
                  heading1: ({children}) => (
                  <h1 className="web3marketingheading">{children}</h1>
                  )
                }}/>
        </div>
        <div className="web3marketingsection1">
          <div className="contentsection1">
            <div className="contentpart">
            <PrismicRichText field={slice.primary.leftsubheading1} components={{
                  heading2: ({children}) => (
                  <h2 className="web3marketingleftsubheading">{children}</h2>
                  )
                }}/>
            <PrismicRichText field={slice.primary.leftsubdescription1} components={{
                  paragraph: ({children}) => (
                  <p className="web3marketingleftsubdescription">{children}</p>
                  )
                }}/>

            </div>
            <div className="contentpart">
            <PrismicRichText field={slice.primary.leftsubheading2} components={{
                  heading2: ({children}) => (
                  <h2 className="web3marketingleftsubheading">{children}</h2>
                  )
                }}/>
            <PrismicRichText field={slice.primary.leftsubdescription2} components={{
                  paragraph: ({children}) => (
                  <p className="web3marketingleftsubdescription">{children}</p>
                  )
                }}/>

            </div>
            <PrismicRichText field={slice.primary.leftmaindescription} components={{
                  paragraph: ({children}) => (
                  <p className="web3marketingleftmaindescription">{children}</p>
                  )
                }} />
          </div>
          <div className="image1wrap1">
          <Image src={image1} alt="image1" className="image1"></Image>
          </div>
        </div>
        <div className="web3marketingsection1 web3marketingsection2">
          <div className="image1wrap2">
            <Image src={image2} alt="image2" className="image2 " ></Image>
          </div>
          <div className="contentsection1">
          <PrismicRichText field={slice.primary.rightheading} components={{
                  heading2: ({children}) => (
                  <h2 className="web3marketingrightheading">{children}</h2>
                  )
                }} />
                <div className=" grid sm:grid-cols-2 lg:grid-cols-2  gap-x-8 gap-y-8 mx-auto sm:place-items-start place-items-center boxgrid">
                    {slice.items.map((item, index) => (
                      <div
                        key={index}
                        className="rightboxgridstyling"
                      >
                        <PrismicRichText  field={item.rightsubheading} 
                        components={{
                          heading2: ({children}) => (
                          <h2 className="web3marketingrightsubheading">{children}</h2>
                          )
                        }}/>
                        <PrismicRichText field={item.rightdescription} 
                        components={{
                          paragraph: ({children}) => (
                          <p className="web3marketingrightsubdescription">{children}</p>
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

export default Web3MarketingGuide;
