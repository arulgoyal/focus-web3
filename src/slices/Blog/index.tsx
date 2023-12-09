import { Content,isFilled} from "@prismicio/client";
import { PrismicRichText, SliceComponentProps} from "@prismicio/react";
import "./index.css"
import { MainarticleDocument } from "../../../prismicio-types";
import { MainarticleDocumentData } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import testimage from '../../../../Images/web3marketing1.png'
/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = async ({ slice }: BlogProps): Promise<JSX.Element> => {
  const client = createClient();

  const trendingArticles = await Promise.all(
    slice.items.map((item) => {
      if(
        isFilled.contentRelationship(item.trendingarticle) && 
        item.trendingarticle.uid
      ){
        return client.getByUID("trendingarticle",item.trendingarticle.uid)
      }
    }
    )
  )
  return (
    
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="blogsectioncontentwrap">
        <div className="headingwrap">
          <PrismicRichText field={slice.primary.heading} components={{
                      heading1: ({children}) => (
                      <h1 className="blogheading">{children}</h1>
                      )
                    }}/>
        </div>
          <div className="blogcontentsection">
            <div className="blogsectionpart1">
              <Image src={testimage} alt="tets"/>
            </div>
            <div className="blogsectionpart2">
            <PrismicRichText field={slice.primary.subheading} components={{
                      heading2: ({children}) => (
                      <h2 className="blogsubheading">{children}</h2>
                      )
                    }}/>
                {trendingArticles.map((item,index) => item && (
                    <div key={index}>
                      <div className="trendingarticleboxstyle">
                        <div className="imagesectionbox">
                          <PrismicNextImage field={item.data.blogimage} className="blogimage"/>
                        </div>
                        <div className="contentsectionbox">
                        <PrismicRichText field={item.data.heading} components={{
                          heading3: ({children}) => (
                          <h3 className="blogsheading">{children}</h3>
                          )
                        }}/>
                        <PrismicRichText field={item.data.blogdescription} components={{
                          paragraph: ({children}) => (
                          <p className="blogdescription">{children}</p>
                          )
                        }} />
                        <div className="publishdate">{item.data.publishdate}</div>
                        </div>
                      </div>
                      
                    </div>
                  ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Blog;
