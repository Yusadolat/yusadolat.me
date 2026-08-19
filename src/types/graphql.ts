import type { ImageDataLike } from "gatsby-plugin-image";

/**
 * Shapes for the GraphQL results Gatsby passes into page and template
 * components. Gatsby does not generate types for this project, so these are
 * maintained by hand: when you change a page query, change the matching type
 * here and `yarn typecheck` will point at every component that needs updating.
 */

export interface SiteMetadata {
  title: string;
  author: string;
  description: string;
  siteUrl: string;
}

export interface SiteQueryResult {
  site: {
    siteMetadata: Partial<SiteMetadata>;
  };
}

/**
 * A gatsby-plugin-image File node. Aliased to the plugin's own ImageDataLike so
 * these values can be handed straight to getImage without a cast.
 */
export type ImageFileNode = ImageDataLike;

export interface MarkdownFrontmatter {
  title: string;
  date: string;
  /** Unformatted date alias, used for schema.org datePublished. */
  isoDate?: string;
  description?: string;
  path?: string;
  tags?: string[];
  published?: boolean;
  style?: string;
  thumbnail?: string;
  model?: string;
  subtitle?: string;
  /** Tech-talk fields, declared in gatsby-node.js createSchemaCustomization. */
  location?: string;
  event?: string;
  audience?: string;
  type?: string;
  duration?: string;
  slides?: string;
  video?: string;
}

export interface MarkdownRemarkNode {
  id: string;
  html: string;
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: MarkdownFrontmatter;
}

/** `previous` and `next` as put on pageContext by gatsby-node.js createPages. */
export interface AdjacentPost {
  fields: { slug: string };
  frontmatter: { title: string };
}

export interface BlogPostContext {
  slug: string;
  previous: AdjacentPost | null;
  next: AdjacentPost | null;
}

export interface BlogPostQueryResult extends SiteQueryResult {
  markdownRemark: MarkdownRemarkNode | null;
  avatar: ImageFileNode | null;
}

/** GitHub profile summary rendered by the homepage Info widget. */
export interface GithubInfo {
  status: string;
  company: string;
  updatedAt: string;
  totalContributions: number;
  bussy: boolean;
}

/** `allMarkdownRemark { edges { node { ... } } }` as used by the list pages. */
export interface MarkdownEdge<
  TNode = Pick<MarkdownRemarkNode, "excerpt" | "frontmatter" | "timeToRead">
> {
  node: TNode;
}

export interface AllMarkdownQueryResult<
  TNode = Pick<MarkdownRemarkNode, "excerpt" | "frontmatter" | "timeToRead">
> extends SiteQueryResult {
  allMarkdownRemark: {
    edges: MarkdownEdge<TNode>[];
  };
}
