import React from "react";
import { graphql } from "gatsby";
import { AwesomeButton } from "react-awesome-button";
import get from "lodash/get";
import Info from "../components/Info";
// Use the Rotational component that renders icons inside items
import Rotational from "../components/Rotational/Rotational";
import Seo from "../components/SEO";
import Social from "../components/Social";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteUrl = get(this, "props.data.site.siteMetadata.siteUrl");
    return (
      <div>
        <Seo title="" url={siteUrl} />
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
                <Rotational avatar={data.avatar} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const queryHome = graphql`
  query QueryHome {
    avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default Index
