import React from 'react';

import Cards from './components/Cards/Cards.component';
import Chart from './components/Chart/Chart.component'; 
import CountryPicker from './components/CountryPicker/CountryPicker.component'; 


class App extends React.Component {
    render() {
        return(
            <div>
                <Cards/>
                <Chart/>
                <CountryPicker/>    
            </div>
        )
    }
}

export default App;