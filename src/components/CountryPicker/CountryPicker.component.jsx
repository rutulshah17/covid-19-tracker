import React from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountryData } from '../../api/api';

import './CountryPicker.styles.css';

class CountryPicker extends React.Component {
    state = {
        fetchedApiCountries: []
    }

    async componentDidMount() {
        const fetchedCountryData = await fetchCountryData();
        this.setState( {fetchedApiCountries: fetchedCountryData} )
    }

    render() {

        const { fetchedApiCountries } = this.state;
        const { handleCountryChange } = this.props;

        return (
            <div>
                <FormControl className='country-picker-form-control'>
                    <NativeSelect 
                        defaultValue='' 
                        onChange={ (event) => handleCountryChange(event.target.value) }>
                        
                            <option value='global'> Global </option>
                            { fetchedApiCountries.map( (country, index) => 
                                <option key={index} value={country}> {country} </option> 
                            ) }
                    
                            </NativeSelect>
                </FormControl>
            </div>
        );
    }

};

export default CountryPicker;