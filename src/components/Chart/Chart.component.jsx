import React from 'react';

import { fetchApiDailyData } from '../../api/api';

import './Chart.styles.css';

class Chart extends React.Component {

    state={
        dailyData: {}
    }

    async componentDidMount() {
        const fetchedDailyData = await fetchApiDailyData();
        this.setState ( { dailyData: fetchedDailyData } );
    }

    render() {    
        const { dailyData } = this.state;

        return (
            <div>
                <h3> Chart </h3>
            </div>
        )
    }
};

export default Chart;