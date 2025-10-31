import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import get from "lodash/get";

import Seo from "../components/SEO";
import Stack from "../components/Stack";

class About extends React.Component {
  render() {
    const siteUrl = get(this, "props.data.site.siteMetadata.siteUrl");
    return (
      <div className="About">
          <Seo title="About" url={`${siteUrl}/about`} />{" "}
          <section className="HeaderAbout Page">
            <div className="container">
              <div className="row center-xs">
                <div className="HeaderContact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
                  <h2 className="About__title Page__title"> About Me </h2>{" "}
                  <p className="About__description Page__description">
                    Hi, My name is Yusuf Adeyemo. I help startups deliver better
                    software and provide more control over there environment and
                    software development process with the help of modern tools
                    and automation.
                  </p>
                  <p className="About__decription Page__description">
                    I currently Work with Vendii (Vendii is building a SaaS cloud suite of vending
                    tools, initially with a focus on fleet management and an
                    automated multi-tiered warehousing tool that integrates
                    directly with IoT vending machines in real-time) as a DevOps
                    Engineer, I love seeking out ingenuity and simplicity,
                    especially in places where over-engineering is common.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <div className="container">
            <div className="row center-xs">
              <div className="About__img-container col-xs-12 col-md-6">
                <div className="About__img">
                  <GatsbyImage image={getImage(this.props.data.aboutImage)} alt="About Me" />{" "}
                </div>{" "}
              </div>{" "}
              <div className="About__interests col-xs-12 col-md-6 text-left first-md">
                <h3 className="About__interests__title"> Interests </h3>{" "}
                <ul className="About__interests__list">
                  <li className="About__interests__item">
                    <i className="ai"> </i>
                    Site Reliability Engineering{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="ds"> </i>
                    Devops{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="cp"> </i>
                    Chaos Engineering
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="ml"> </i>
                    ML Ops{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="game"> </i>
                    ChatBOT Development{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="back"> </i>
                    Data, data and more data{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <Stack />
        </div>
    );
  }
}

export const queryAbout = graphql`
  query QueryAbout {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    aboutImage: imageSharp(fluid: { originalName: { regex: "/me.jpg/" } }) {
      gatsbyImageData(width: 720, layout: CONSTRAINED)
    }
  }
`

export default About;
