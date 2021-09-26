// Import React
import React from 'react';

// Import the reducer from the correct folder
import About from './about/about';
import Weather from './weather/weather';
import Help from './help/help';
import Header from '../components/header';


const WeatherApp = () => (
    <>
        <Header />
        <About />
        <Weather />
        <Help />
    </>
);

export { WeatherApp as default }