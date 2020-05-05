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
		const { data, country } = this.props;

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

		const barChart = (
			(data.confirmed !== undefined)
			? (
				<Bar 
					data={{
						labels: ['Infected', 'Recovered', 'Deaths'],
						datasets: [{
							labels: 'People',
							backgroundColor: [ 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
							data: [data.confirmed.value, data.recovered.value, data.deaths.value]
						}]
					}}
					options={{
						legend: { display: false },
						title: { display: true, text: `Current state in ${country}`}
					}}
				/>
			)
			: null
		)

		return (
			<div className='chart-container'>
				{ country 
					? barChart
					: lineChart 
				}
			</div>
		)
	}
};

export default Chart;