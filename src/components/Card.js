import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { media } from '../styles'

const Container = styled(Link)`
	& > div {
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
	}
	text-decoration: none;
`
const ImageWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
	width: 100%;
	max-width: 500px;
	${media.md`
		width: 36%;		
	`}
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
	${Container}:hover & {
		color: #1976d2;
	}
`
const Description = styled.p`
	color: #666d71;
	margin: 10px 0 0 0!important;
	font-size: 1.1em;
	line-height: 1.4;
`
const Meta = styled.div`
	margin-top: 8px!important;
	color: #666d71;
	font-size: .9em;
`

const Card = ({ data }) => {
	const image = getImage(data.thumbnail)
	return (
		<Container to={data.path}>
			<div>
				<ImageWrapper>
					<GatsbyImage
						image={image}
						alt={data.title}
						style={{ height: '100%' }}
					/>
				</ImageWrapper>
				<Info>
					<Title>{data.title}</Title>
					<Description>{data.excerpt}</Description>
					<Meta>
						<span>{data.date} • {data.timeToRead} min read</span>
					</Meta>
				</Info>
			</div>
		</Container>
	)
}

export default Card