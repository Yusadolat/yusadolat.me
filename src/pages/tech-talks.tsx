import React from 'react'
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import TechTalkCard from '../components/TechTalkCard'
import Seo from '../components/SEO'
import type { AllMarkdownQueryResult } from '../types/graphql'

const TalksWrapper = styled.div`
	padding: 0 15px;
	max-width: 1060px;
	margin: 0 auto;
`

const EmptyState = styled.div`
	max-width: 640px;
	margin: 0 auto 80px;
	padding: 40px 24px;
	text-align: center;
	border: 1px solid #e2e2e2;
	border-radius: 6px;
	p {
		margin: 0 0 12px;
		color: #6a6a6a;
	}
	a {
		font-weight: 600;
	}
`

interface TechTalksProps {
	data: AllMarkdownQueryResult
}

class TechTalks extends React.Component<TechTalksProps> {
	render() {
		const talks = this.props.data.allMarkdownRemark?.edges ?? []
		const publishedTalks = talks.filter(({ node }) => node.frontmatter.published)
		const siteUrl = this.props.data.site?.siteMetadata?.siteUrl ?? ''
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
								<h1 className="HeaderTechTalks__title Page__title">Tech Talks & Speaking</h1>
								<p className="HeaderTechTalks__description Page__description">
									Talks, workshops and presentations on cloud infrastructure, site
									reliability, automation and developer platforms.
								</p>
							</div>
						</div>
					</div>
				</section>
				{publishedTalks.length === 0 && (
					<EmptyState>
						<p>No talks published here yet.</p>
						<p>
							I&#39;m available to speak on cloud infrastructure, reliability
							and developer platforms — <Link to="/contact">get in touch</Link>.
						</p>
					</EmptyState>
				)}
				<TalksWrapper>
					{
						publishedTalks.map(({ node }) => {
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
