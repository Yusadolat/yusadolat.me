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
                    Hi, I'm Yusuf Adeyemo, a Senior DevOps Engineer and Cloud Infrastructure
                    Consultant with over 7 years of experience helping organizations build
                    reliable, scalable, and secure cloud infrastructure.
                  </p>
                  <p className="About__decription Page__description">
                    I specialize in infrastructure automation, container orchestration, and
                    CI/CD pipeline optimization using tools like Kubernetes, Terraform, AWS,
                    and Ansible. My expertise spans cloud architecture, site reliability
                    engineering, and implementing DevOps best practices that reduce deployment
                    times and improve system reliability.
                  </p>
                  <p className="About__decription Page__description">
                    As an AWS Community Builder and HashiCorp Ambassador, I actively contribute
                    to the DevOps community through knowledge sharing and mentoring. I'm passionate
                    about simplifying complex systems and eliminating over-engineering to deliver
                    practical, maintainable solutions.{" "}
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
