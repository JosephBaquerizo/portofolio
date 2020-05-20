import React, {Component} from 'react';
import './NavigationBar.css';

class NavigationBar extends Component {
	constructor() {
		super();
	}

	navActive = (event) => {
		let navbar = document.getElementsByClassName('nav-links');
		navbar[0].classList.toggle('nav-active');
	}

	render() {
		return(
		<div className='NavBar'>
			<div className='Logo'>
				<p>JOSEPH BAQUERIZO</p>
			</div>
			<div className='Options'>
			<nav>
				<div onClick={this.navActive} className='hamburger'>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</div>
					<ul className='nav-links' id='myDiv'>
	  					<li><a className='selec active'  href="#LPcontainer">Home</a></li>
						<li><a className='am selec' href="#AMcontainer">About Me</a></li>
						<li><a className='selec' href="#Scontainer">Skills</a></li>
						<li><a className='selec' href="#WorkContainer">Work</a></li>
						<li><a className='selec ContactBtn' href='#ContactContainer'>Contact</a></li>
					</ul>
				</nav>
			</div>
		</div>
		)
	}
}

export default NavigationBar;