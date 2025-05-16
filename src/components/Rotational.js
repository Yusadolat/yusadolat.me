import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Rotational = props => (
	<div className="Rotational">	
		<div className="Rotational__orbit">
			<div className="Rotational__item computer"></div>
			<div className="Rotational__item hacker"></div>
			<div className="Rotational__item server"></div>
			<div className="Rotational__item www"></div>
			<div className="Rotational__item browser"></div>
			<div className="Rotational__item protection"></div>
			<div className="Rotational__item laptop"></div>
			<div className="Rotational__item headphones"></div>
			<div className="Rotational__avatar-container">
				<GatsbyImage image={getImage(props.avatar)} alt="Avatar" />
			</div>
		</div>
	</div>
)

export default Rotational;