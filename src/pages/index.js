import React from "react";
import { graphql } from "gatsby";
import { AwesomeButton } from "react-awesome-button";
import get from "lodash/get";
import Info from "../components/Info";

import Rotational from "../components/Rotational";
import SEO from "../components/SEO";
import Social from "../components/Social";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteUrl = get(this, "props.data.site.siteMetadata.siteUrl");
    return (
      <Layout location={this.props.location}>
        <div>
          <SEO title="" url={siteUrl} />
          <main className="Header-Home">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-lg-5 text-center">
                  <h1 className="Header-Home__title">Yusuf Adeyemo</h1>
                  <h2 className="Header-Home__subtitle">
                    Devops Engineer | Site Reliability Engineer
                  </h2>
                  <Social />
                  <Info />
                  <AwesomeButton
                    className="Header-Home__btn-about"
                    href="/about"
                  >
                    ABOUT ME
                  </AwesomeButton>
                </div>
                <div className="col-xs-12 col-lg-7">
                  <GatsbyImage image={data.avatar} alt="Avatar" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}

export const queryHome = graphql`
  query QueryHome {
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar2.jpeg/" } }) {
      gatsbyImageData(width: 720, layout: CONSTRAINED)
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

export default Index;
