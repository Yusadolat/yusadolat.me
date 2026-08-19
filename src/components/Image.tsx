import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { ImageDataLike } from "gatsby-plugin-image";

interface ImageProps {
  /** A File or ImageSharp node from a GraphQL query. May be absent. */
  source: ImageDataLike | null | undefined;
  alt: string;
  className?: string;
}

/**
 * GatsbyImage requires a non-null `image`, but `getImage` returns undefined
 * whenever the query did not supply one — which happens across this site for
 * post header images that were never queried. Passing undefined straight
 * through logs "Missing image prop" for every affected page and renders an
 * empty box. Rendering nothing is the honest result, and it keeps the
 * nullability visible in one place instead of at each call site.
 */
const Image = ({ source, alt, className }: ImageProps) => {
  const image = getImage(source ?? null);
  if (!image) return null;
  return <GatsbyImage className={className} image={image} alt={alt} />;
};

export default Image;
