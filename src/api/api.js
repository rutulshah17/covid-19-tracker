import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


//API FOR CARDS
export const fetchApiData = async() => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
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

//API FOR CHARTS
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