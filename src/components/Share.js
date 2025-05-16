import React from 'react'

const Share = props => (
		<div className={ `Share `
			+ (props.fixed ? "Share--fixed" : "")
			+ (props.show ? "" : " hide") }>
			<a className="Share__iconwrapper comment" href="#disquser" >
				<img alt="img" className="Share__icon" title="Comentar" src="https://icongr.am/fontawesome/comment.svg?color=ffffff"/>
			</a>
			<a className="Share__iconwrapper twitter" href={`https://twitter.com/intent/tweet?text=${ props.title } by Yusuf Adeyemo (@yusadolat) ${ props.url}` }  target="_blank" rel="noopener noreferrer" data-size="large">
				<img alt="img" className="Share__icon" title="Share on Twitter" src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"/>
			</a>
			<a className="Share__iconwrapper facebook" href={`https://www.facebook.com/sharer/sharer.php?
				app_id=2209722672595950
				&sdk=joey
				&u=${ props.url }`
				}
				target="_blank"
				rel="noopener noreferrer"
				title={ props.title }
				>
					<img alt="img" className="Share__icon" title="Share on Facebook" src="https://icongr.am/fontawesome/facebook.svg?color=ffffff"
				/>
			</a>
			<a className="Share__iconwrapper linkedin" href={
				`http://www.linkedin.com/shareArticle?url=${ props.url }&isFramed=true&lang=es_ES` }
				target="_blank"
				rel="noopener noreferrer">
				<img alt="img" className="Share__icon" title="Share on Linkedin" src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				/>
			</a>
	</div>
)

export default Share;