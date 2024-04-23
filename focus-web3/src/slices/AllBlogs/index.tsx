import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import "./index.css"
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `AllBlogs`.
 */
export type AllBlogsProps = SliceComponentProps<Content.AllBlogsSlice>;

/**
 * Component for "AllBlogs" Slices.
 */
const AllBlogs = async ({ slice }: AllBlogsProps): Promise<JSX.Element> => {
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
      <div className="allblogscontentwrap">
        <div className="allblogsheadingwrap">
          <div className="allblogsheadingwrap">
            <PrismicRichText field={slice.primary.heading} components={{
                        heading1: ({children}) => (
                        <h1 className="allblogspageheading">{children}</h1>
                        )
                      }}/>
          </div>
        </div>
        <div className="allblogsdisplaysection">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-8 mx-auto sm:place-items-start place-items-center allblogspagegrid">
        {trendingArticles.map((item,index) => item && (
                    <div key={index}>
                        <Link href={`trendingarticle/${item.uid}`}>
                        <div className="allblogsgridboxstyling">
                        <div className="allblogsimagesectionbox">
                          <PrismicNextImage field={item.data.blogimage} className="allblogsblogimage"/>
                        </div>
                        <div className="contentsectionbox">
    
                          <PrismicRichText field={item.data.heading} components={{
                            heading3: ({children}) => (
                            <h3 className="blogsheading ">{children}</h3>
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
                        </Link>
                      </div>
                      
                  ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
