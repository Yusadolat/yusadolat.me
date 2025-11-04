import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import styled from 'styled-components'

import TechTalkCard from '../components/TechTalkCard'
import Seo from '../components/SEO'

const TalksWrapper = styled.div`
	padding: 0 15px;
	max-width: 1060px;
	margin: 0 auto;
`

class TechTalks extends React.Component {
	render() {
		const talks = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
			<div className="TechTalks">
				<Seo
					title="Tech Talks & Speaking"
					description="Speaking engagements, workshops, and presentations on DevOps, SRE, and cloud infrastructure"
					url={`${siteUrl}/tech-talks`}
				/>
				<section className="HeaderTechTalks Page">
					<div className="container">
						<div className="row center-xs">
							<div className="HeaderTechTalks__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
								<h2 className="HeaderTechTalks__title Page__title">Tech Talks & Speaking</h2>
								<p className="HeaderTechTalks__description Page__description">
									Speaking engagements, workshops, and presentations on product management,
									technical marketing, and developer advocacy.
								</p>
							</div>
						</div>
					</div>
				</section>
				<TalksWrapper>
					{
						talks.map(({ node }) => {
							if (node.frontmatter.published)
								return (
									<TechTalkCard
										key={node.frontmatter.path}
										data={
											{
												title: node.frontmatter.title,
												thumbnail: node.frontmatter.thumbnail,
												description: node.frontmatter.description,
												excerpt: node.excerpt,
												date: node.frontmatter.date,
												location: node.frontmatter.location,
												event: node.frontmatter.event,
												type: node.frontmatter.type,
												audience: node.frontmatter.audience,
												duration: node.frontmatter.duration,
												slides: node.frontmatter.slides,
												video: node.frontmatter.video,
												path: node.frontmatter.path,
												tags: node.frontmatter.tags
											}
										}/>
								)
							else return false
						})
					}
				</TalksWrapper>
			</div>
		)
	}
}

export const queryTechTalks = graphql`
  	query QueryTechTalks {
   	site {
      	siteMetadata {
            title
            siteUrl
      	}
    	}
    	allMarkdownRemark(
    		sort: {frontmatter: {date: DESC}}
    		filter: { frontmatter: { model: { eq: "tech-talk"} }}) {
				edges {
					node {
						excerpt(pruneLength: 200)
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							title
							description
							path
							thumbnail
							location
							event
							type
							audience
							duration
							slides
							video
							tags
							published
						}
					}
				}
    		}
   	}
`

export default TechTalks
