import contentfulClient from "@/contentful/contentfulClient";
import { TypeProductsSkeleton } from "@/contentful/types/products.types";

export const getProductsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeProductsSkeleton>();
    // console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};
