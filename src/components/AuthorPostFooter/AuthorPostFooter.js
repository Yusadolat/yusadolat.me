import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default props => (
  <div className="AuthorPostFooter">
    <div className="AuthorPostFooter__header">
      <Img className="AuthorPostFooter__image" sizes={props.avatar.sizes} />
    </div>
    <div className="AuthorPostFooter__body">
      <p className="AuthorPostFooter__written by">
        {props.make ? "Written" : "Written"} by
      </p>
      <Link to="/#about" className="AuthorPostFooter__name">
        Yusuf Adeyemo
      </Link>
      <p className="AuthorPostFooter__about">
        Javascript Full Stack Developer. Devops Engineer focus on AWS and
          Google Cloud. I also like to develop BOT, you can see the ones I created
        in my <Link to="/portfolio">portfolio</Link>.
      </p>
      <div className="AuthorPostFooter__social">
        <a href="https://www.github.com/yusadolat">
          <img
            alt="img"
            src="https://icongr.am/fontawesome/github.svg?color=646464&size=21"
          />
        </a>
        <a href="https://twitter.com/yusadolat">
          <img
            alt="img"
            src="https://icongr.am/fontawesome/twitter.svg?color=646464&size=21"
          />
        </a>
        <a href="https://www.linkedin.com/in/yusadolat">
          <img
            alt="img"
            src="https://icongr.am/fontawesome/linkedin.svg?color=646464&size=21"
          />
        </a>
        <a href="https://www.instagram.com/yusadolat">
          <img
            alt="img"
            src="https://icongr.am/fontawesome/instagram.svg?color=646464&size=21"
          />
        </a>
      </div>
    </div>
  </div>
);
