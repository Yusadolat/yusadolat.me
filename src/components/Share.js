import React from 'react'

import Icon from './Icon'

const Share = props => {
	const encodedUrl = encodeURIComponent(props.url || '')
	const encodedText = encodeURIComponent(
		`${props.title || ''} by Yusuf Adeyemo (@yusadolat)`
	)
	const targets = [
		{
			name: 'comment',
			className: 'comment',
			label: 'Jump to comments',
			href: '#disquser',
			external: false
		},
		{
			name: 'twitter',
			className: 'twitter',
			label: 'Share on Twitter',
			href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
			external: true
		},
		{
			name: 'facebook',
			className: 'facebook',
			label: 'Share on Facebook',
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
			external: true
		},
		{
			name: 'linkedin',
			className: 'linkedin',
			label: 'Share on LinkedIn',
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
			external: true
		}
	]

	return (
		<div className={ `Share `
			+ (props.fixed ? "Share--fixed" : "")
			+ (props.show ? "" : " hide") }>
			{targets.map(({ name, className, label, href, external }) => (
				<a
					key={name}
					className={`Share__iconwrapper ${className}`}
					href={href}
					{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
					<Icon className="Share__icon" name={name} label={label} />
				</a>
			))}
		</div>
	)
}

export default Share;
