import React from 'react';
import NavMenu from '../../components/NavMenu/NavMenu';
import './Home.css';

const Home = () => {
	return (
		<div className="home-container">
			<div className='fake-nav'></div>
			<div className='server-details-container'>
				<div>
					<h1>Server details:</h1>
					<ul>
						<li>
							<span>Max level: 75</span>
							<ul>
								<li><span>Instant lvl 61</span></li>
								<li><span>Fast lvl 61-70</span></li>
								<li><span>Fair medium lvl 70-75</span></li>
							</ul>
						</li>
						<li>
							<span>Max pet level: 25</span>
							<ul>
								<li><span>One level per minute</span></li>
							</ul>
						</li>
						<li>
							<span>Starter items pack</span>
							<ul>
								<li><span>Contains 100 bound gold, blue set level 50-60 +7, 
									<br />enhanced weapons 60-70 +7, enhanced asistants</span></li>
							</ul>
						</li>
						<li>
							<span>Max color drop: golden</span>
							<ul>
								<li><span>Dark golden magic bead drop. (25% success rate)</span></li>
							</ul>
						</li>
						<li>
							<span>Fair larges and pills drop</span>
							<ul>
								<li><span>4-6 larges/pills in 100 mobs</span></li>
							</ul>
						</li>
						<li>
							<span>No EZ, QL, PB to avoid apprentices.</span>
						</li>
						<li>
							<span>No PRC sets just yet</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Home
