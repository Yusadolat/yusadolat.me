import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import { HTMLContent } from "../components/Content";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Project from "./Project";
import Post from "./Post/Post";

export default class BlogPostTemplate extends React.Component {
  state = {
    location: "",
    show_share: false
  };

  componentDidMount() {
    let links = document.getElementsByTagName("a");
    for (const link of links) {
      if (
        link.getElementsByTagName("img").length > 0 ||
        link.getElementsByTagName("svg").length > 0
      ) {
        link.style.backgroundImage = "inherit";
      }
    }
    this.setState({ location: window.location.href });
    let body = document.documentElement;
    let contentY = document.getElementById("Post_content").offsetTop;
    let height = document.getElementById("Post_content").clientHeight;

    const scrollListenerShare = () => {
      let y = body.scrollTop - contentY + 110;
      let show = y >= 0 && y - 0 <= height - 340;

      if (this.state.show_share !== show) {
        this.setState({ show_share: show });
      }
    };

    window.addEventListener("scroll", scrollListenerShare);
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteMetadata = get(this.props, "data.site.siteMetadata");
    const { previous, next } = this.props.pageContext;
    return (
      <Layout location={this.props.location}>
        <div>
          <SEO
            title={post.frontmatter.title}
            url={`${siteMetadata.siteUrl}/${post.frontmatter.path}`}
            description={post.frontmatter.description}
            isPost={true}
          />
          {post.frontmatter.model === "post" ? (
            <Post
              {...post}
              {...siteMetadata}
              previous={previous}
              next={next}
              content={post.html}
              contentComponent={HTMLContent}
              image={post.frontmatter.thumbnail}
              avatar={this.props.data.avatar}
            />
          ) : (
            <Project
              {...post}
              {...siteMetadata}
              previous={previous}
              next={next}
              content={post.html}
              contentComponent={HTMLContent}
              image={post.frontmatter.thumbnail}
              avatar={this.props.data.avatar}
            />
          )}
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar2.jpeg/" } }) {
      gatsbyImageData(width: 720, layout: CONSTRAINED)
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      excerpt
      frontmatter {
        title
        subtitle
        date(formatString: "DD MMMM, YYYY")
        model
        description
        path
        thumbnail
        category
        tags
        stack
        roles
        client
        repository
        website
        licence
      }
    }
  }
`;
