import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import ContactForm from "../components/ContactForm";
import ContactSocial from "../components/ContactSocial";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

class Contact extends React.Component {
  render() {
    const siteUrl = get(this, "props.data.site.siteMetadata.siteUrl");
    return (
      <Layout location={this.props.location}>
        <div className="Contact">
          <SEO title="Contact me" url={`${siteUrl}/contact`} />{" "}
          <section className="HeaderContact Page">
            <div className="container">
              <div className="row center-xs">
                <div className="HeaderContact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
                  <h2 className="HeaderContact__title Page__title">
                    {" "}
                    Contact{" "}
                  </h2>
                  <p className="HeaderContact__description Page__description">
                    {" "}
                    First of all, thanks for visiting my blog.If you have any
                    questions, do you want us to work together or do you want to
                    leave me some words ? I would love to hear you.You can
                    follow me on my social networks or you can send me an email
                    to
                  </p>
                  <p className="Page__description">
                    {" "}
                    <b> yusadolat@gmail.com </b>:
                  </p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <ContactSocial />
          <div className="Contact__form container--full">
            <div className="row center-xs">
              <div className="col-xs-12 col-md-7 start-xs">
                <ContactForm />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Layout>
    );
  }
}

export const queryContact = graphql`
  query QueryContact {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

export default Contact;
