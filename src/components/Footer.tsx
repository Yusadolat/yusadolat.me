import React from 'react'
import styled from 'styled-components'

import IconGlyph from './Icon'
import { SOCIAL_LINKS } from '../utils/socialLinks'

const Container = styled.footer `
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 200px;
	background: #fafafa;
	* {
		margin: 0;
		padding: 0;
	}
`

const Social = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
`

const Icon = styled.a `
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	margin: 0 7px;
	color: #282a2d;
`

const Copy = styled.p `
	font-size: 13px;
	font-weight: 600;
	color: #848687;
	text-align: center;
	span {
		color: #ff7763;
	}
	a {
		color: #282a2d;
		text-decoration: none;
	}
`

const Footer = props => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Social>
        {SOCIAL_LINKS.map(({ name, label, href }) => (
          <Icon
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer">
            <IconGlyph name={name} label={`${label} — Yusuf Adeyemo`} size={20} />
          </Icon>
        ))}
      </Social>
      <Copy>
        {currentYear} - All rights reserved. Made with <span> </span> by <a href="https://twitter.com/yusadolat" target="_blank" rel="noopener noreferrer">Yusuf Adeyemo</a>
      </Copy>
    </Container>
  );
};

export default Footer;