import React from 'react'
import styled from 'styled-components'

import { media } from '../styles'

const Container = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	flex-direction: column;
	border-bottom: 1px solid rgb(221, 221, 221);
	padding: 2rem 0px;
	${media.md`
		flex-direction: row;
	`}
	* {
		margin: 0;
	}
`

const ImageWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
	width: 100%;
	max-width: 500px;
	${media.md`
		width: 36%;
	`}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Info = styled.div`
	width: 100%;
	max-width: 560px;
	padding-top: 12px;
	${media.md`
		padding: 0 0 0 50px;
		width: 64%;
		max-width: 100%;
	`}
`

const Title = styled.h3`
	font-family: 'Open Sans', sans-serif;
	color: #282a2d;
	transition: .3s;
	&:hover {
		color: #1976d2;
	}
`

const Description = styled.p`
	color: #666d71;
	margin: 10px 0 0 0!important;
	font-size: 1.05em;
	line-height: 1.4;
`

const Meta = styled.div`
	margin-top: 12px!important;
	color: #666d71;
	font-size: .9em;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`

const MetaItem = styled.span`
	display: inline-flex;
	align-items: center;
	&:not(:last-child):after {
		content: "•";
		margin-left: 8px;
		color: #999;
	}
`

const Badge = styled.span`
	display: inline-block;
	padding: 4px 10px;
	background: #1976d2;
	color: white;
	border-radius: 3px;
	font-size: 0.85em;
	font-weight: 600;
	margin-top: 8px;
`

const Links = styled.div`
	margin-top: 12px!important;
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
`

const LinkButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 8px 16px;
	background: #f0f0f0;
	color: #333;
	border-radius: 4px;
	text-decoration: none;
	font-size: 0.9em;
	font-weight: 600;
	transition: .3s;
	&:hover {
		background: #1976d2;
		color: white;
	}
`

const TechTalkCard = ({ data }) => {
	return (
		<Container>
			<ImageWrapper>
				{data.thumbnail ? (
					<img
						src={data.thumbnail}
						alt={data.title}
					/>
				) : (
					<div style={{ height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
						No Image
					</div>
				)}
			</ImageWrapper>
			<Info>
				<Title>{data.title}</Title>
				{data.type && <Badge>{data.type}</Badge>}
				<Description>{data.description || data.excerpt}</Description>
				<Meta>
					{data.date && <MetaItem>{data.date}</MetaItem>}
					{data.event && <MetaItem>{data.event}</MetaItem>}
					{data.location && <MetaItem>{data.location}</MetaItem>}
					{data.audience && <MetaItem>{data.audience}</MetaItem>}
					{data.duration && <MetaItem>{data.duration}</MetaItem>}
				</Meta>
				<Links>
					{data.slides && (
						<LinkButton href={data.slides} target="_blank" rel="noopener noreferrer">
							📊 View Slides
						</LinkButton>
					)}
					{data.video && (
						<LinkButton href={data.video} target="_blank" rel="noopener noreferrer">
							🎥 Watch Video
						</LinkButton>
					)}
				</Links>
			</Info>
		</Container>
	)
}

export default TechTalkCard
