import React from 'react';

import Cards from './components/cards/cards.component';
import Chart from './components/chart/chart.component'; 
import CountryPicker from './components/country-picker/countrypicker.component'; 

import CoronaImage from './images/image.png';

import './app.css'

import { fetchApiData } from  './api/api';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchApiData();
        this.setState ( { data: fetchedData } );
    }

    handleCountryChange = async(country) => {
        
        //fetch the data
        const fetchedData = await fetchApiData(country);
        
        //set the state
        this.setState ( { data: fetchedData, country: country} );

    }

    render() {

        const { data, country } = this.state;

        return(
            <div className='app-container'>
                <img className='app-container-img' src={CoronaImage} alt='COVID-19'/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />    
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;