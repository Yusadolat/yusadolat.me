import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AuthorPost = props => (
	<div className='AuthorPost'>
		<div className="AuthorPost__header">
			<GatsbyImage className="AuthorPost__image" image={getImage(props.avatar)} alt="Author" />
		</div>
		<div className="AuthorPost__body">
			<p className="AuthorPost__name"><Link to="/about">Yusuf Adeyemo</Link> <b>|</b> <span>{ props.date } · { props.timeToRead } min reading</span></p>
		</div>
	</div>
)

export default AuthorPost