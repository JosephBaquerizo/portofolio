import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
	return(
			<div className='AMcontainer'>
				<div className='AMbox'>
						<div className='AMdivTitle'>
							<p className='AMtitle'>About Me</p>
						</div>
						<div className='AMdivText'>
							<p className='AMtext'>
							"Soy un estudiante de ingeniería mecatrónica en la Escuela Superior Politécnica del Litoral. He aprendido de forma autónoma
							temas relacionados a la programación como el desarrollo de páginas web y el machine learning. No he tenido mucha experiencia
							laboral con respecto a estos entornos de trabajo, sin embargo me preparo de la mejor forma posible para futuros proyectos que
							pueda emprender. No me considero un experto en dichas áreas porque pienso que siempre hay algo más que aprender."
							</p>
						</div>
						<div className='allButton'>
							<button className='AMbutton'>Ver Currículum</button>
						</div>
				</div>
			</div>
	)
}

export default AboutMe;