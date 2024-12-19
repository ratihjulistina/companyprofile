import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface IContentfulAsset {
  sys: { id: string };
  fields: { file: { url: string; fileName?: string; contentType?: string } };
}

export interface TypeProductsFields {
  title: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
  slug?: EntryFieldTypes.Symbol;
  catagory: EntryFieldTypes.Symbol;
}

export type TypeProductsSkeleton = EntrySkeletonType<
  TypeProductsFields,
  "products"
>;
export type TypeProducts<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProductsSkeleton, Modifiers, Locales>;
