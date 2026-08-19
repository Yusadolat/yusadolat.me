import React from 'react'
import { withPrefix } from 'gatsby'

import type { StackItem } from '../types/stack'

interface ItemProps {
	item: StackItem
}

const Item = ({ item }: ItemProps) => (
	<div className='Stack__item' >
		<img
			className="Stack__item__img"
			style={{
				background: (item.background ? item.background : 'transparent'),
				boxShadow: (item.background ? '0 0 4px #191919' : '0 0 0 transparent' )
			}}
			// The name is repeated immediately below in a heading, so the logo is
			// decorative. It previously carried alt="img", which a screen reader
			// reads aloud once per item.
			alt=""
			loading="lazy"
			decoding="async"
			src={ withPrefix('icons/' + item.icon) }/>
		{
			item.about &&
			<div className="Stack__item__tooltip">
				<p className="Stack__item__tooltip__text">
					{ item.about }
					<span className="Stack__item__tooltip__arrow"></span>
				</p>
			</div>
		}
		<h3 className="Stack__item__name">{ item.name }</h3>
		<div className="Stack__item__typewrapper">
			<h4 className="Stack__item__type">{item.type}</h4>
		</div>

	</div>
)

export default Item;
