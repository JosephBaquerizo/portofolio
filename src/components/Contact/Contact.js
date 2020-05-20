import React, {Component} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends Component {

	constructor() {
		super();
	}

	validateEmail = (email) => {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return re.test(email);
	}

	validate = () => {
		let name = document.getElementsByClassName('name')[0];
		let email = document.getElementsByClassName('email')[0];
		let message = document.getElementsByClassName('message')[0];
		let redname = document.getElementsByClassName('redName')[0];
		let redemail = document.getElementsByClassName('redEmail')[0];
		let redmessage = document.getElementsByClassName('redMessage')[0];

		if (name.value==='') {
			console.log('nombre vacio');
			redname.className += ' der';
		}else {
			redname.className += 'alert redName';
		}
		if (!this.validateEmail(email.value)) {
			console.log('email invalido');
			redemail.className += ' der';
		}else {
			redemail.className = 'alert redEmail';
		}
		if (message.value==='') {
			console.log('mensaje vacio');
			redmessage.className += ' der';
		}else {
			redmessage.className = 'alert redMessage';
		}
		if ((name.value!=='') && (this.validateEmail(email.value)) && (message.value!=='')) {
			console.log('cumple todos los parametros');
			window.alert('Your message was submitted successfully!')
			/*let templateParams = { from_name: name.value,
    						   to_name: 'Joseph',
    						   message_html: message.value
    						 };
    		emailjs.send('gmail', 'template_N8Oy141p', templateParams, 'user_k9cfuX2aeXSzwbPfwXR2o')
    			.then(function(response) {
       				console.log('SUCCESS!', response.status, response.text);
    			}, function(error) {
       				console.log('FAILED...', error);
    		});*/
		}
	}

	handleSubmit = (event) => {
		console.log('click');
		this.validate();
	}

	handleReset = (event) => {
		let name = document.getElementsByClassName('name')[0]
		let email = document.getElementsByClassName('email')[0]
		let message = document.getElementsByClassName('message')[0]

		name.value = '';
		email.value = '';
		message.value = '';
	}

	render() {
		return (
		<div className='contactContainer' id='ContactContainer'>
			<div className='contactForm'>	
				<div className='contactTitle'>
					<p className='contactText'>Contact Me</p>
				</div>
				<hr/>
				<div className='form'>
					<div className='formText'>
						<label>Name</label>
						<input className='name' type='text' placeholder='Enter your name'/>
					</div>
					<div className='alertDiv'>
						<p className='alert redName'>Name entered is invalid*</p>
					</div>
					<div className='formText'>
						<label>Email</label>
						<input className='email' type='email' placeholder='Enter your email'/>
					</div>
					<div className='alertDiv'>
						<p className='alert redEmail'>Email entered is invalid*</p>
					</div>
					<div className='formText'>
						<label>Message</label>
						<textarea className='message' placeholder='Enter your message'></textarea>
					</div>
					<div className='alertDiv'>
						<p className='alert redMessage'>Message entered is invalid*</p>
					</div>
					<div className='btnArea'>
						<button onClick={this.handleSubmit} class='submitBtn'>Submit</button>
						<button onClick={this.handleReset} className='resetBtn'>Reset</button>
					</div>
				</div> 
			</div>
		</div>
		)
	}
}

export default Contact;