import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import get from "lodash/get";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Stack from "../components/Stack";

class About extends React.Component {
  render() {
    const siteUrl = get(this, "props.data.site.siteMetadata.siteUrl");
    return (
      <Layout location={this.props.location}>
        <div className="About">
          <SEO title="About" url={`${siteUrl}/about`} />{" "}
          <section className="HeaderAbout Page">
            <div className="container">
              <div className="row center-xs">
                <div className="HeaderContact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
                  <h2 className="About__title Page__title"> About Me </h2>{" "}
                  <p className="About__description Page__description">
                    My career in web development spans over 5 years. After years
                    of working at agencies helping clients such as APTN News,
                    Canada, Qalam Edu Center, Somaliland, GirongVR and Evidence
                    Radio Nigeria bring engaging and effective experiences to
                    the widest audience possible, I Founded Hostailor Inc where
                    I help SME 's take charge of their hosting needs. I
                    currently Work with IderaOS(Ideraos helps you sell online
                    with ease) as a Front-end Engineer, I love seeking out
                    ingenuity and simplicity, especially in places where
                    over-engineering is common.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <div className="container">
            <div className="row center-xs">
              <div className="About__img-container col-xs-12 col-md-6">
                <div className="About__img">
                  <Img sizes={this.props.data.aboutImage.sizes} />{" "}
                </div>{" "}
              </div>{" "}
              <div className="About__interests col-xs-12 col-md-6 text-left first-md">
                <h3 className="About__interests__title"> Interests </h3>{" "}
                <ul className="About__interests__list">
                  <li className="About__interests__item">
                    <i className="ai"> </i>
                    Artificial Intelligence{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="ml"> </i>
                    Machine Learning{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="ds"> </i>
                    Data Science{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="cp"> </i>
                    Competitive Programming{" "}
                  </li>{" "}
                  <li className="About__interests__item">
                    <i className="game"> </i>
                    BOT Development{" "}
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
        </div>{" "}
      </Layout>
    );
  }
}

export const queryAbout = graphql`
  query QueryAbout {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    aboutImage: imageSharp(
      fluid: { originalName: { regex: "/about-image.jpg/" } }
    ) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

export default About;
