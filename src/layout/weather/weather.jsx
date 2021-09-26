import React, { useState } from 'react'
import WeatherResults from '../../components/weather/results';
import geocode from '../../utils/weather/geocode';
import forecast from '../../utils/weather/forecast';

const Weather = () => {
    const searchBase = { searchTerm: '', previousSearchTerm: '' }
    const [search, setSearchTerm] = useState({ ...searchBase });
    const [previousSearchResults, setResults] = useState([]);

    // Chains forcast to geocode and updates results with the return forcast object
    const getWeatherFromLocationAndUpdateResults = async searchWord => {
        try {
            const locationResults = await geocode(searchWord);
            const forecastResult = await forecast(locationResults);
    
            if (forecastResult){
                setResults([forecastResult, ...previousSearchResults]);
            }
        } catch (error){
            return console.error(error);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (search.searchTerm && search.searchTerm !== search.previousSearchTerm) {
            getWeatherFromLocationAndUpdateResults(search.searchTerm);
            setSearchTerm({ ...search, previousSearchTerm: search.searchTerm });
        }
    };

    const handleChange = event => {
        setSearchTerm({ searchTerm: event.target.value, previousSearchTerm: search.previousSearchTerm });
    };

    return (
            <div className="content--container-center">
                <h2>Weather</h2>
                <p>Search location below to discover it's weather!</p>
                <div className="input--group" >
                    <form className="form" onSubmit={handleSubmit}>
                        <input 
                            className="text--input"
                            value={search.searchTerm} 
                            onChange={handleChange}
                        />
                        <button className="button" type="submit">Search</button>
                    </form>
                </div>
                <WeatherResults results={previousSearchResults} />
            </div>
    )
};

export { Weather as default }