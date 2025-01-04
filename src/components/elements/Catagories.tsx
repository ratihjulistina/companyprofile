import { useEffect, useState } from "react";
import Link from "next/link";
import { getProductsContentful } from "./Request";
import Image from "next/image";
import {
  IContentfulAsset,
  TypeProductsSkeleton,
} from "@/contentful/types/products.types";
import { rubik } from "@/static/Font";
import { Entry } from "contentful";

export function Catagories({ filterKey }: { filterKey: string }) {
  const [posts, setPosts] = useState<
    Entry<TypeProductsSkeleton, undefined, string>[] | undefined
  >(undefined); // State to store the fetched data

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      const data = await getProductsContentful();
      setPosts(data?.items); // Set the fetched posts
    }
    fetchData();
  }, [posts]); // Empty dependency array ensures it runs only once after initial render

  const contentType = "products";
  const filteredData = posts?.filter(
    (post) => post.sys.contentType.sys.id === contentType
  );

  return (
    <div className="w-[100%] mx-auto  opacity-0.4 min-h-max py-10">
      <div
        className={`${rubik.variable} font-sans text-4xl text-black pt-10 text-center py-10 font-bold `}
      >
        {filterKey}
      </div>
      <div className=" w-[80%] mx-auto grid grid-cols-3 gap-5">
        {filteredData &&
          filteredData
            .filter((post) => post.fields.catagory === filterKey)
            .map((blog, idx) => (
              <div key={idx} className=" drop-shadow-2xl h-[500px] max-w-sm  ">
                <Link className=" " href={`article/${blog.fields.slug}`}>
                  <div className="h-[60%] w-full rounded-t-lg shadow-xl">
                    {" "}
                    <Image
                      src={`https:${
                        (blog.fields.image as IContentfulAsset)?.fields.file.url
                      }`}
                      alt="gambar"
                      height={300}
                      width={300}
                      className="w-full h-full object-cover rounded-t-lg shadow-lg"
                    />
                  </div>

                  <div className=" w-[100%] h-[40%] px-2 flex flex-col justify-between items-center m-auto pb-3 shadow-xl border-b-1 rounded-b-lg bg-white ">
                    <div
                      className={`${rubik.variable} font-sans text-2xl tracking-tigh font-extrabold mb-2 pt-3 h-[30%]`}
                    >
                      {blog.fields.title}
                    </div>

                    <Link href={`article/${blog.fields.slug} `}>
                      <div
                        className={`${rubik.variable} font-sans text-white bg-red-800 font-semibold hover:bg-red-500 focus:ring-4 focus:ring-black  rounded-lg text-sm px-3 py-2 text-center inline-flex items-center`}
                      >
                        Read More
                      </div>
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
