import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
	list-style: none;
	margin-left: 0;
`

const Container = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	max-width: 760px;
	@media (min-width: 992px) { 		
		max-width: 960px;
	}
`

// This was styled(Link) rendered without a `to` prop, so every tag was a Gatsby
// Link pointing nowhere, and the <ul> held anchors rather than list items. The
// site has no tag archive route to link to, so these are labels, not links.
const Item = styled.li`
	padding: 2px 7px;
	background: #F7F7F7;
	color: #6A6A6A;
	border-radius: 3px;
	margin: 0 2px;
	font-size: 13px;
	font-family: 'Open Sans';
	font-weight: 600;
	display: inline-block;
	text-transform: capitalize;
	text-decoration: none !important;
	&:hover {
		background: #E2E2E2;
	}
`

interface TagsProps {
	items: string[]
}

const Tags = ({ items }: TagsProps) => (
	<Container>
		<List>
			{
				items.map(item => <Item key={item}>{ item }</Item>)
			}
		</List>
	</Container>
)

export default Tags