import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicImage, PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";
import "./page.css"

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("mainarticle", params.uid)
    .catch(() => notFound());

  return (
    <div className="trendingarticlepagewrap">
        
        <PrismicRichText field={page.data.heading} components={{
                      heading3: ({children}) => (
                      <h3 className="trendingarticlepageblogheading">{children}</h3>
                      )
                    }}/>
        <p className="trendingarticlepagepublishdate">Published in FocusWeb3 Magazine</p>
        <div className="trendingarticlepagepublishdate">{page.data.publishdate}</div>

        <PrismicImage field={page.data.blogimage} className="trendingarticlepageblogimage" />
        <PrismicRichText field={page.data.blogdescription} components={{
                          paragraph: ({children}) => (
                          <p className="trendingarticlepageblogdescription">{children}</p>
                          )
                        }} />
        <PrismicRichText field={page.data.blogmaindescription} components={{
                          paragraph: ({children}) => (
                          <p className="trendingarticlepagemainblogdescription">{children}</p>
                          )
                        }} />                
        <Link href="/">
          <button
            className="bg-black text-white py-3 px-10 my-4 text-lg uppercase blogpagebutton
                    "
          >
            {" "}
            Back to home &nbsp; 
          </button>
        </Link>
      </div>
      
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("mainarticle", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("mainarticle");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
