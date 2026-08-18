import React from 'react'
import { Link } from 'gatsby'
import Image from './Image'

const AuthorPost = props => (
	<div className='AuthorPost'>
		<div className="AuthorPost__header">
			<Image className="AuthorPost__image" source={props.avatar} alt="Author" />
		</div>
		<div className="AuthorPost__body">
			<p className="AuthorPost__name"><Link to="/about">Yusuf Adeyemo</Link> <b>|</b> <span>{ props.date } · { props.timeToRead } min reading</span></p>
		</div>
	</div>
)

export default AuthorPost