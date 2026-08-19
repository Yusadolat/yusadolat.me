import React from 'react'

import Item from './Item'
import type { StackGroup } from '../types/stack'

interface GroupProps {
	group: StackGroup
}

const Group = ({ group }: GroupProps) => (
	<div className="Stack__group">
		<p className="Stack__group__title">{group.title}</p>
		<div className="Stack__group__itemswrapper">
			{
				group.items.map(item => <Item key={item.name} item={item}/>)
			}
		</div>
	</div>
)

export default Group;
