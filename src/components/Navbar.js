import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Logo from '../assets/images/logo_letter.png'
import { isPostOrProject } from '../utils'

class Navbar extends React.Component {
	state = {
		navbarIsTop: true,
		menuIsOpen: false
	}

	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
		navbarIsTop: true,
		menuIsOpen: false
	}

	componentDidMount() {
		const scrollListener = () => {
			let scrollPosition = document.documentElement.scrollTop
			this.setState({
				navbarIsTop: scrollPosition <= 5
			})
		}
		window.addEventListener('scroll', scrollListener)
		window.addEventListener('resize', () => {
			let width = window.innerWidth;
			if(width >= 768) {
				this.setState({
					menuIsOpen: false
				})
			}
		})
	}

	handleToggle = event => {
		this.setState((prevState, props) => {
			return {
				menuIsOpen: !prevState.menuIsOpen,
			}
		})
	}

	render() {
		const { menuIsOpen }	 = this.state
		const isPost = isPostOrProject(this.props.activePage)
		return (
			<nav className={
				"Navbar " +
				(this.props.activePage === "" ? "inicio " : "") +
				(menuIsOpen ? ' open ' : '') +
				(isPost ? '' : ' isPost ') +
				(this.state.navbarIsTop ? '' : 'noTop')
			}
				id="Navbar">
				<div
					onClick={ (e) => { this.setState({ menuIsOpen: false }) }}
					className={`Navbar__shadow ${menuIsOpen ? 'open' : ''}`}>
				</div>
				<div className="container">
					<Link className="Navbar__titlewrap"
						onClick={ (e) => { this.setState({menuIsOpen: false}) } }
						to="/">
						<img alt="logo" className="Navbar__logo" src={Logo} />
						<p className="Navbar__title">Yusuf Adeyemo</p>
					</Link>
					<div className="Navbar__navwrap">
						<button onClick={ this.handleToggle }
							id="navbarToggler"
							className={`Navbar__toggler ${menuIsOpen ? 'open' : ''}`}>
							<span className="Navbar__toggler__burger-menu"></span>
						</button>
						<ul className={ `Navbar__nav ${ menuIsOpen ? 'open' : '' }` }>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } }
									className={`Navbar__link ${ this.props.activePage === '' ? 'active' : ''}`}
									to="/">
									<svg className="icon-item" version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img">
									  <path d="M33.71,17.29l-15-15a1,1,0,0,0-1.41,0l-15,15a1,1,0,0,0,1.41,1.41L18,4.41,32.29,18.71a1,1,0,0,0,1.41-1.41Z" />
									  <path d="M28,32h-5V22H13V32H8V18L6,20V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76l-2-2Z" />
									</svg>
									Home
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Certifications' ? 'active' : ''}`} to="/certifications">
									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28H4V8H32v9.6l2,2.4V8A2,2,0,0,0,32,6Z"/>
									  <path d="M18,19.18l-4.9-3.14A2,2,0,0,0,10,17.62V23a2,2,0,0,0,1.76,2l6.94,1A2,2,0,0,0,21,24V17.62a2,2,0,0,0-3.1-1.66ZM19,24l-7-1V17.62L16.93,20.8a1,1,0,0,0,1.07.08,1,1,0,0,0,.53-.88Z"/>
									  <path d="M26.87,16.29a20.37,20.37,0,0,1,1.65-1.4,2,2,0,0,0-.1-3.2l-4.88-2.94a2,2,0,0,0-2.1,0l-4.88,2.94a2,2,0,0,0-.1,3.2A20.37,20.37,0,0,1,18.11,16l.1.07V17a1,1,0,0,0,2,0v-.9l.1-.07C21,15.47,24,13.44,26.87,16.29ZM21,10.2l4.88,2.94-4.88,2.94L16.12,13.14Z"/>
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Certifications
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Tech Talks' ? 'active' : ''}`} to="/tech-talks">
									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M29.55,19.29,20,15.47V5a1,1,0,0,0-2,0V15.47l-9.55,3.82a1,1,0,0,0-.58.92v9a1,1,0,0,0,1,1H28.13a1,1,0,0,0,1-1v-9A1,1,0,0,0,29.55,19.29ZM27.13,28.18H9.87V20.69l8.58-3.43v2.56a1,1,0,0,0,2,0V17.26l8.58,3.43Z"/>
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Tech Talks
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'About' ? 'active' : ''}`} to="/about">
									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z" /><path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z" />
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									About Me
								</Link>
							</li>
							{/* <li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Portfolio' ? 'active' : ''}`}to="/portfolio">

									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M15,17H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,17ZM4,8v7H15V8Z" /><path d="M32,17H21a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,17ZM21,8v7H32V8Z" /><path d="M15,30H4a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,30ZM4,21v7H15V21Z" /><path d="M32,30H21a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,30ZM21,21v7H32V21Z" />
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Portfolio
								</Link>
							</li> */}
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Contact' ? 'active' : ''}`} to="/contact">
									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z" />
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar