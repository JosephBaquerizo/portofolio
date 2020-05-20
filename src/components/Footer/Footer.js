import React from 'react';
import './Footer.css';

const Footer = () => {
	return(
		<div className='footerContainer'>
			<div className='socialContainer'>
				<a href='https://www.linkedin.com/in/joseph-baquerizo-792ab21a9/'>
					<img className='footerImg linkedIn' src='https://image.flaticon.com/icons/svg/466/466951.svg'/>
				</a>
				<a href='https://github.com/JosephBaquerizo'>
					<img className='footerImg github' src='https://image.flaticon.com/icons/svg/1051/1051377.svg'/>
				</a>
				<a>
					<img className='footerImg mail' src='https://image.flaticon.com/icons/png/512/831/831408.png'/>
				</a>
			</div>
		</div>
	)
}

export default Footer;