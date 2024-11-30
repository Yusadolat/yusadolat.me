import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'

import Item from '../components/PortfolioItem'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

class Portfolio extends React.Component {
	render() {
		const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location }>
					<div className="Portfolio">
						<SEO
						  title="Portafolio"
						  url={`${siteUrl}/portfolio`}
						/>
						<section className="HeaderPortfolio Page">
							<div className="container">
								<div className="row center-xs">
									<div className="HeaderPortfolio__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
										<h2 className="HeaderPortfolio__title Page__title">Portfolio</h2>
										<p className="HeaderPortfolio__description Page__description">A little bit of my work</p>
									</div>
								</div>
							</div>
						</section>
						<div className="Page__content container--full">
							<div className="row center-xs start-md center-xl">
								{
									posts.map(( { node }, index) => {
										return (
											<div className="Portfolio__item col-xs-12 col-sm-12 col-md-6 col-xl-5" key={index}>
												<Item
													data={
														{
															title: node.frontmatter.title,
															subtitle: node.frontmatter.subtitle,
															thumbnail: node.frontmatter.thumbnail,
															excerpt: node.excerpt,
															date: node.frontmatter.date,
															path: `/${node.frontmatter.path}`,
															timeToRead: node.timeToRead,
															tags: node.frontmatter.tags,
															repository: node.frontmatter.repository,
															website: node.frontmatter.website
														}
													}
													mode="portfolio"/>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</Layout>
		)
	}
}

export const queryPortfolio = graphql`
  query QueryPortfolio {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { model: { eq: "project"} }}
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            subtitle
            description
            path
            thumbnail
            model
            stack
            repository
            website
          }
        }
      }
    }
  }
`

export default Portfolio
