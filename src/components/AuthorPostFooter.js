import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Icon from './Icon'
import { SOCIAL_LINKS } from '../utils/socialLinks'

const AuthorPostFooter = props => (
	<div className='AuthorPostFooter'>
		<div className="AuthorPostFooter__header">
			<GatsbyImage className="AuthorPostFooter__image" image={getImage(props.avatar)} alt="Author" />
		</div>
		<div className="AuthorPostFooter__body">
			<p className="AuthorPostFooter__written by">{ props.make ? 'Written' : 'Written'} by</p>
			<Link to="/#about" className="AuthorPostFooter__name">Yusuf Adeyemo</Link>
			<p className="AuthorPostFooter__about">Award Winning Full Stack Developer with focus on Backend. I also like to develop BOT, you can see the ones I created in my <Link to="/portfolio">portfolio</Link>.</p>
			<p className="AuthorPostFooter__name"><Link to="/about">Yusuf Adeyemo</Link> <b>|</b> <span>{ props.date } · { props.timeToRead } min reading</span></p>
			<div className="AuthorPostFooter__social">
				{SOCIAL_LINKS.map(({ name, label, href }) => (
					<a
						key={name}
						href={href}
						target="_blank"
						rel="noopener noreferrer">
						<Icon name={name} label={`${label} — Yusuf Adeyemo`} size={21} />
					</a>
				))}
			</div>
		</div>
	</div>
)

export default AuthorPostFooter