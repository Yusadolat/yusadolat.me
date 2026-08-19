import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

import Icon from './Icon'
import { SOCIAL_LINKS } from '../utils/socialLinks'

const ContactSocialWrapper = styled.div`
	text-align: center;
`

const ContactSocial = props => (
	<ContactSocialWrapper>
		{SOCIAL_LINKS.map(({ name, label, href }) => (
			<AwesomeButton
				key={name}
				className="ContactSocial__icon"
				type={name}
				size="small"
				href={href}
				target="_blank"
				rel="noopener noreferrer">
				<Icon name={name} label={`${label} — Yusuf Adeyemo`} />
			</AwesomeButton>
		))}
	</ContactSocialWrapper>
)

export default ContactSocial;
