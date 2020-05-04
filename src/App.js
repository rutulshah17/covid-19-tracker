import React from 'react';

import Cards from './components/Cards/Cards.component';
import Chart from './components/Chart/Chart.component'; 
import CountryPicker from './components/CountryPicker/CountryPicker.component'; 

import './app.css'

import { fetchApiData } from  './api/api';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchApiData();
        this.setState ( { data: fetchedData } );
    }

    render() {

        const { data } = this.state;

        return(
            <div className='app-container'>
                <Cards data={data} />
                <CountryPicker />    
                <Chart />
            </div>
        )
    }
}

export default App;