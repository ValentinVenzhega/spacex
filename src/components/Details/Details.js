import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import './details.css';
import Main from '../Main/Main';
import YouTube from 'react-youtube';

const Details = (props) => {

	const [launch, setLaunch] = useState(null)
	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch])
	

	const history = useHistory();

	if (!launch) return <div>загрузка...</div>

	return(
		<div>
			<Main name={launch.name}/>
			<main class="details">
				<div class="container">
					<div class="details-row">
						<div class="details-image">
							<img src={launch.links.patch.small} alt={launch.main} />
						</div>
						<div class="details-content">
							<p class="details-description">{launch.details}</p>
						</div>
					</div>
					<YouTube className='details-youtube' videoId={launch.links.youtube_id} />
				</div>
				<a onClick={history.goBack} class="button button-back">go back</a>
			</main>
		</div>
	);
};

export default Details;