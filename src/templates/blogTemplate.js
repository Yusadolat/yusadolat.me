import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import { HTMLContent } from "../components/Content";
import Seo from "../components/SEO";
import Layout from "../components/Layout";
import Post from "./Post/Post";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const [showShare, setShowShare] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    // Update links with images
    const links = document.getElementsByTagName("a");
    for (const link of links) {
      if (
        link.getElementsByTagName("img").length > 0 ||
        link.getElementsByTagName("svg").length > 0
      ) {
        link.style.backgroundImage = "inherit";
      }
    }

    setCurrentLocation(window.location.href);

    // Setup scroll listener for share button
    const contentElement = document.getElementById("Post_content");
    if (contentElement) {
      const contentY = contentElement.offsetTop;
      const height = contentElement.clientHeight;

      const scrollListenerShare = () => {
        const y = window.scrollY - contentY + 110;
        const show = y >= 0 && y - 0 <= height - 340;
        setShowShare(show);
      };

      window.addEventListener("scroll", scrollListenerShare);
      return () => window.removeEventListener("scroll", scrollListenerShare);
    }
  }, []);

  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const { siteUrl } = data.site.siteMetadata;

  if (!post || !data.site?.siteMetadata) {
    return <div>Error: Post data not found.</div>;
  }

  return (
    <Layout location={location}>
      <div>
        <Seo
          title={post.frontmatter.title}
          url={`${siteUrl}${post.fields.slug}`}
          description={post.frontmatter.description}
          isPost={true}
        />
        <Post
          {...post}
          {...data.site.siteMetadata}
          previous={previous}
          next={next}
          content={post.html}
          contentComponent={HTMLContent}
          showShare={showShare}
          location={currentLocation}
        />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        tags
        published
      }
    }
  }
`;
