import './Projects.css';
import mdl from '../../assets/imgs/MDL.png';
import cineprime from '../../assets/imgs/cineprime.jpg';
import tunr from '../../assets/imgs/tunr.png';
import hops from '../../assets/imgs/Hops.jpg';

function Projects() {
	return (
		<div id='projects'>
			<h2 className='subtitle--red'>My previous projects</h2>
			<h3 className='sub-yellow'>Click or hover on each to find out more:</h3>
			<div className='projects-div'>
				<div className='card'>
					<img src={cineprime} alt='projects' />
					<p className='title'>Cineprime</p>
					<br />
					<p className='proj-description'>
						Movies browser/tracker. MERN stack group project with JWT authentication.
						Offers signup/signin form. Provides full functionality only to registered
						users. Hosted on Netlify and Heroku.
					</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						{/* <a
							href='https://github.com/josilob/cineprime-frontend'
							target='_blank'
							rel='noreferrer'>
							<button className='btn'>GitHub</button>
						</a> */}
						<a href='https://cineprime.netlify.app/' target='_blank' rel='noreferrer'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
				<div className='card'>
					<img src={mdl} alt='projects' />
					<p className='title'>Mixed Drinks Library</p>
					<br />
					<p className='proj-description'>
						React API project that helps user find cocktail by pivotal spirit. You
						choose a bottle of liquor and below it generates list of drinks. After
						chosing one of the drinks, it re-routes user to see details and
						preparation methods.
					</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						{/* <a
							href='https://github.com/josilob/Mixed-Drinks-Library'
							target='_blank'
							rel='noreferrer'>
							<button className='btn'>GitHub</button>
						</a> */}
						<a
							href='https://mixed-drinks-josilob.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
				<div className='card'>
					<img src={hops} alt='projects' />
					<p className='title'>Hops Revolution</p>
					<br />
					<p className='proj-description'>
						Project with Google Maps integration that helps user locate selected
						brewery. It allows both brewery search by the City and Beer lookup by the
						name. Brewery details are displayed on a coaster which is the link to the
						brewery location.
					</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						{/* <a
							href='https://github.com/josilob/Project4'
							target='_blank'
							rel='noreferrer'>
							<button className='btn'>GitHub</button>
						</a> */}
						<a
							href='https://brewery-cap.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>

				<div className='card'>
					<img src={tunr} alt='projects' />
					<p className='title'>TUNR</p>
					<br />
					<p className='proj-description'>
						Project is built with Ruby on Rails in the back end. It offers basic CRUD
						functionality with Heroku hosted Backend and frontend with Netlify.
					</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						{/* <a
							href='https://github.com/josilob/TUNR-front'
							target='_blank'
							rel='noreferrer'>
							<button className='btn'>GitHub</button>
						</a> */}
						<a href='https://boj-tunr.netlify.app/' target='_blank' rel='noreferrer'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
