"use client";

import { useState, useEffect } from "react"; //berarti dalam react file ada banyak export function pakai kurung kurawal
import { IContentfulAsset } from "@/contentful/types/products.types";
import contentfulClient from "@/contentful/contentfulClient"; //cuma ada 1 function yg di export default
import Image from "next/image";
import { useParams } from "next/navigation";
import RichText from "@/components/global/RichText";
import Navbar from "@/components/layout/Navbar";
import { rubik } from "@/static/Font";

export default function Article() {
  //fitur next bisa langsung akses slug dari params
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>();

  const fetchArticles = async () => {
    try {
      const data = await contentfulClient.getEntries({
        content_type: "products",
        limit: 1,
        "fields.slug": params.slug,
      });

      setArticle(data.items[0].fields);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [article]);

  return (
    <div>
      {article && (
        <div>
          <Navbar />
          <div className="w-full h-[50vh] bg-[rgb(109,26,41)] flex flex-col justify-end mb-5">
            <div
              className={`${rubik.variable} font-sans w-[87.4%] mx-auto text-4xl font-extrabold mb-10 text-white `}
            >
              {article?.title}
            </div>
          </div>
          <div className="w-[87.4%] m-auto">
            <div className="relative h-[400px] w-[70%] bg-white mx-auto mb-10 ">
              <Image
                src={`https:${
                  (article?.image as IContentfulAsset)?.fields.file.url
                }`}
                fill
                style={{ objectFit: "cover" }}
                alt="article-image"
              />
            </div>
            <div className={`text-0.5xl ${rubik.variable} font-sans`}>
              <RichText document={article?.body} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
