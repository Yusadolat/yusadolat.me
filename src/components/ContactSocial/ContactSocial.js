import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const ContactSocialWrapper = styled.div`
	text-align: center;
`

export default props => (
	<ContactSocialWrapper>
		<AwesomeButton
			className="ContactSocial__icon"
			type="github"
			size="small"
			href="https://www.github.com/yusadolat"
			title="Github - Yusadolat"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/github.svg?color=ffffff"
				title="Github - Yusuf Adeyemo"
				alt="img"/>
		</AwesomeButton>
		<AwesomeButton
			className="ContactSocial__icon"
			type="twitter"
			size="small"
			href="https://twitter.com/Yusadolat"
			title="Twitter - Yusuf Adeyemo"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
				title="Twitter - Yusuf Adeyemo"
				alt="img"/>
		</AwesomeButton>
		<AwesomeButton
			className="ContactSocial__icon"
			type="linkedin"
			size="small"
			href="https://www.linkedin.com/in/yusadolat/"
			title="Linkedin - Yusuf Adeyemo"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				title="Linkedin - Yusuf Adeyemo"
				alt="img"/>
		</AwesomeButton>
		<AwesomeButton
			className="ContactSocial__icon"
			type="instagram"
			size="small"
			href="https://www.instagram.com/yusadolat/"
			title="Instagram - Yusuf Adeyemo"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/instagram.svg?color=ffffff"
				title="Instagram - Yusuf Adeyemo"
				alt="img"/>
		</AwesomeButton>
	</ContactSocialWrapper>
)