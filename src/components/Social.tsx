import React from 'react'
import styled from 'styled-components'

import Icon from './Icon'
import { SOCIAL_LINKS } from '../utils/socialLinks'

const SocialWrapper = styled.div`
	text-align: center;
`
const SocialIcon = styled.a`
	margin: 0 5px !important;
	background: #bbbbbb;
	border-radius: 50%;
	width: 44px;
	height: 44px;
	padding: 12px;
	color: #ffffff;
	transition: .3s;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	svg {
		transition: .3s;
		display: block;
	}
	&:hover {
		transform: scale(1.15);
	}

	&:hover svg {
		transform: scale(.9);
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
		&:hover,
		&:hover svg {
			transform: none;
		}
	}
`
const Social = props => (
	<SocialWrapper>
		{SOCIAL_LINKS.map(({ name, label, href }) => (
			<SocialIcon
				key={name}
				className={`${name}--hover`}
				href={href}
				target="_blank"
				rel="noopener noreferrer">
				<Icon name={name} label={`${label} — Yusuf Adeyemo`} />
			</SocialIcon>
		))}
	</SocialWrapper>
)

export default Social;
