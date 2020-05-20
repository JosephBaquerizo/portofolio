import React from 'react';
import './Skills.css';

const Skills = () => {
	return(
		<div className='Scontainer' id='Scontainer'>
			<div className='allSkill'>
				<div className='StitleContainer'>
					<p className='Stitle'>Skills</p>
				</div>
				<div className='ScardContainer'>
					<div className='Card Code'>
						<img className='image codeImg'/>
						<p className='title'>Code</p>
						<p className='point'>HTML</p>
						<p className='point'>CSS</p>
						<p className='point'>Javascript</p>
						<p className='point'>Python</p>
					</div>
					<div className='Card Tools'>
						<img className='image toolsImg'/>
						<p className='title'>Tools</p>
						<p className='point'>Git</p>
						<p className='point'>Node.js</p>
						<p className='point'>Jupyter Notebook</p>
						<p className='point'>React</p>
					</div>
					<div className='Card SoftSkills'>
						<img className='image softskillsImg'/>
						<p className='title'>Soft Skills</p>
						<p className='point'>Organization</p>
						<p className='point'>Teamwork</p>
						<p className='point'>Communication</p>
						<p className='point'>Leadership</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills;