import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AuthorPost from "../../components/AuthorPost";
import AuthorPostFooter from "../../components/AuthorPostFooter";
import Share from "../../components/Share";
import Content from "../../components/Content";

const Post = ({
  content,
  frontmatter,
  previous,
  next,
  siteTitle,
  image,
  siteUrl,
  contentComponent,
  timeToRead,
  avatar,
  model
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div className={`Post ${frontmatter.style}`}>
      <div className="Post__header">
        <div className="Post__header__data">
          <h1 className="Post__title">{frontmatter.title}</h1>
          <AuthorPost
            date={frontmatter.date}
            timeToRead={timeToRead}
            avatar={avatar}
          />
        </div>
        {frontmatter.style !== "default" && (
          <div className="Post__header__image">
            <GatsbyImage image={getImage(image)} alt={frontmatter.title} />
          </div>
        )}
      </div>
      <PostContent content={content} className="container Post__content" />
      <div className="wrapper-post">
        <div className="Foot__Share">
          <Share
            title={frontmatter.title}
            url={`https://yusadolat.me/` + frontmatter.path}
          />
        </div>
        <div className="Foot__AuthorPost">
          <AuthorPostFooter
            date={frontmatter.date}
            timeToRead={timeToRead}
            avatar={avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
