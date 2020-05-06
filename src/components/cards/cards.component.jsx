import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './cards.styles.css';

const Cards = ( { data } ) => {

	if(data && !data.confirmed) {
		return 'Loading...'
	}
	
	return (
		<div className='cards-container'>
			<Grid container spacing={3} justify='center'>
				<Grid item component={Card} xs={12} md={3} className='cards-grid-item infected' >
					<CardContent>
						<Typography color='textSecondary' gutterBottom> Infected </Typography>
						<Typography variant='h5'> 
							<CountUp 
								start={0}
								end={data.confirmed.value}
								duration={1.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'> { new Date(data.lastUpdate).toDateString() } </Typography>
						<Typography variant='body2'> Number of active cases of COVID-19 </Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className='cards-grid-item recovered' >
					<CardContent>
						<Typography color='textSecondary' gutterBottom> Recovered </Typography>
						<Typography variant='h5'> 
							<CountUp 
								start={0}
								end={data.recovered.value}
								duration={1.0}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'> { new Date(data.lastUpdate).toDateString() } </Typography>
						<Typography variant='body2'> Number of active recoveries from COVID-19 </Typography>
					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className='cards-grid-item deaths' >
					<CardContent>
						<Typography color='textSecondary' gutterBottom> Deaths </Typography>
						<Typography variant='h5'> 
							<CountUp 
								start={0}
								end={data.deaths.value}
								duration={1.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'> { new Date(data.lastUpdate).toDateString() } </Typography>
						<Typography variant='body2'> Number of deaths caused by COVID-19 </Typography>
					</CardContent>
				</Grid>

			</Grid>
		</div>
)
};

export default Cards;