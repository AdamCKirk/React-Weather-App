// Import React
import React from 'react';

// Import the reducer from the correct folder
import About from './about/about';
import Weather from './weather/weather';
import Help from './help/help';


const WeatherApp = () => {

    // By replacing the div with the context any child and their children will have access to the context
    return (
        <>
            <h1>Notes - Update</h1>
            <About />
            <Weather />
            <Help />
        </>
    )
};

export { WeatherApp as default }