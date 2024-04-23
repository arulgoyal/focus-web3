import { Content,isFilled} from "@prismicio/client";
import { PrismicRichText, SliceComponentProps} from "@prismicio/react";
import "./index.css"
import { MainarticleDocument } from "../../../prismicio-types";
import { MainarticleDocumentData } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import testimage from '../../../../Images/web3marketing1.png'
import Link from "next/link";
import ellipse1 from "../../../../Images/b;ogellipse1.png"
import ellipse2 from "../../../../Images/blogellipse2.png"
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
  // const mainArticles = await Promise.all(
  //   slice.items.map((item1) => {
  //     if(
  //       isFilled.contentRelationship(item1.mainarticle) && 
  //       item1.mainarticle.uid
  //     ){
  //       return client.getByUID("trendingarticle",item1.mainarticle.uid)
  //     }
  //   }
  //   )
  // )
  const mainArticles = await client.getSingle("mainarticle")

  return (
    
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="blog"
    >
      <div className="blogsectioncontentwrap">
      <Image src={ellipse1} alt ="ellipse1" className="blogellipse1" />
        <Image src={ellipse2} alt ="ellipse2" className="blogellipse2" />
        <div className="headingwrap">
          <PrismicRichText field={slice.primary.heading} components={{
                      heading1: ({children}) => (
                      <h1 className="blogheading">{children}</h1>
                      )
                    }}/>
        </div>
          <div className="blogcontentsection">
            <div className="blogsectionpart1">
              <PrismicNextImage field={mainArticles.data.blogimage}className="mainarticleblogimage"/>
              <Link href={`mainarticle/${mainArticles.uid}`}>
              <PrismicRichText field={mainArticles.data.heading} components={{
                          heading3: ({children}) => (
                          <h3 className="mainarticleblogsheading blogheading">{children}</h3>
                          )
                        }}/>
              </Link>
            <PrismicRichText field={mainArticles.data.blogdescription} components={{
                          paragraph: ({children}) => (
                          <p className="mainarticleblogdescription ">{children}</p>
                          )
                        }} />
            <div className="mainarticlepublishdate publishdate">{mainArticles.data.publishdate}
            </div>
              
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
                        <Link href={`trendingarticle/${item.uid}`}>
                        <PrismicRichText field={item.data.heading} components={{
                          heading3: ({children}) => (
                          <h3 className="blogsheading">{children}</h3>
                          )
                        }}/>
                        </Link>
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
          <Link href={`allblogspage/`}><button className="viewallblogsbutton">View All Blogs</button> </Link>
      </div>
    </section>
  );
};

export default Blog;
