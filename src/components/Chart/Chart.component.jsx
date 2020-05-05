import React from 'react';

import { fetchApiDailyData } from '../../api/api';

import { Line, Bar } from 'react-chartjs-2';

import './Chart.styles.css';

class Chart extends React.Component {

	state={
		dailyData: []
	}

	async componentDidMount() {
		const fetchedDailyData = await fetchApiDailyData();
		this.setState ( { dailyData: fetchedDailyData } );
	}

	render() {    
		const { dailyData } = this.state;

		console.log(dailyData)

		const lineChart = (
			dailyData.length 
			? ( <Line 
				data={{
					labels: dailyData.map( ({ date }) => date ),
					datasets: [ {
						data: dailyData.map( ({ confirmed }) => confirmed ),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true
					}, {
						data: dailyData.map( ({ deaths }) => deaths ),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba( 255, 0, 0, 0.5 )',
						fill: true
					} ]
				}}
			/> )
			: null
		);


		return (
			<div className='chart-container'>
				{ lineChart }
			</div>
		)
	}
};

export default Chart;