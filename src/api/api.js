import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


//API FOR CARDS
export const fetchApiData = async( country ) => {
    let changeableUrl = url;
    
    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;

    } catch (error) {

    }
}

//API FOR CHARTS - CHARTS COMPONENTS: LINE CHART
export const fetchApiDailyData = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiedDailyData = data.map( (dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }) );

        return modifiedDailyData;
    
    } catch (error) {

    }
}

// API FOR COUNTRIES - CHARTS COMPONENT: BAR CHART
export const fetchCountryData = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map( (country) => country.name );

    } catch (error) {

    }
}