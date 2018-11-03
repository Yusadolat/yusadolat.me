import React from 'react'
import Swal from 'sweetalert2'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

 
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

const Container = styled.div`
	padding: 20px 10px;
`
const Item = styled.div`
	padding: 15px 0;
`
const Label = styled.p`
	display: block;
	font-size: .75rem;
	font-weight: 700;
	letter-spacing: .05em;
	line-height: 1.45;				
	text-transform: uppercase;
	margin-bottom: .3rem;
`
const Submit = styled(AwesomeButton)`
	width: 140px !important;
`

class ContactForm extends React.Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: ""
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: {
				 "Content-Type": "application/x-www-form-urlencoded"
			},
			body: encode({
				"form-name": "contact", 
				...this.state
			})
		})
		.then(() => {
			Swal({
				type: 'success',
				title: 'Mensaje Enviado', 
				text: 'Gracias por enviarme tu mensaje, te responderé lo mas pronto posible.',
				confirmButtonClass:  'Btn',
    			cancelButtonClass:  'Btn',
    			onClose: () => {    				
					this.setState({
						name: "",
						email: "",
						subject: "",
						message: ""
					})
    			}
			})

		})
		.catch(error => alert("Error al enviar el mensaje. Vuelve a intentarlo."))
		e.preventDefault()
	}

	handleChange = e => this.setState({ 
		[e.target.name]: e.target.value
	})

	render() {
		const { name, email, subject, message } = this.state
		return (
			<Container>
				<form 
					name="contact"
					onSubmit={ this.handleSubmit }
					>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Your name</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input name="name" value={ name } className="ContactForm__input" placeholder="Name" type="text" required onChange={ this.handleChange }/>
						</div>
					</div>		
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">E-mail</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input name="email" value={email} className="ContactForm__input" placeholder="tu@email.com" type="email" required onChange={ this.handleChange }/>
						</div>
					</div>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Subject</p>
						</div>
						<div className="ContactForm__inputwrap">
							<input name="subject" value={subject} className="ContactForm__input" placeholder="Subject" type="text" required onChange={ this.handleChange }/>
						</div>
					</div>
					<div className="ContactForm__item">
						<div className="ContactForm__labelwrap">
							<p className="ContactForm__label">Message</p>
						</div>
						<div className="ContactForm__inputwrap">
							<textarea name="message" value={message} className="ContactForm__input" placeholder="Enter your message here" rows="6" required onChange={ this.handleChange }></textarea>
						</div>
					</div>					
					<div className="ContactForm__item">
						<div className="ContactForm__submitwrap">
							<AwesomeButton
								className="ContactForm__submit"
								size="medium"
							  type="primary">
							  SUBMIT
							</AwesomeButton>
						</div>
					</div>
				</form>
			</Container>
		)
	}
}

export default ContactForm