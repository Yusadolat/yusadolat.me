import React from 'react'
import styled from 'styled-components'

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
	margin: 0 15px;
	//@include breakpoint(xs) {
	//	margin: 0 10px;
	//}
	img {
		width: 27px;
	}
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

const Footer = props => (
  <Container>
    <Social>
      <Icon target="_blank" href="https://www.github.com/yusadolat">
        <img alt="Github Yusuf Adeyemo" src="https://icongr.am/fontawesome/github.svg?size=20&color=282a2d" />
      </Icon>
      <Icon target="_blank" href="https://twitter.com/yusadolat">
        <img alt="Twitter Yusuf Adeyemo" src="https://icongr.am/fontawesome/twitter.svg?size=20&color=282a2d" />
      </Icon>
      <Icon target="_blank" href="https://www.linkedin.com/in/yusadolat">
        <img alt="Linkedin Yusuf Adeyemo" src="https://icongr.am/fontawesome/linkedin.svg?size=20&color=282a2d" />
      </Icon>
      <Icon target="_blank" href="https://www.instagram.com/yusadolat">
        <img alt="Instagram Yusuf Adeyemo" src="https://icongr.am/fontawesome/instagram.svg?size=20&color=282a2d" />
      </Icon>
    </Social>
    <Copy>
      2021 - All rights reserved. Made with <span> </span> by <a href="https://twitter.com/yusadolat" target="_blank" rel="noopener noreferrer">Yusuf Adeyemo</a>
    </Copy>
  </Container>
);

export default Footer;