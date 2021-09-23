import React from 'react'

const Weather = () => {

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <>
            <h2>Weather</h2>

            <p>Search location below to discover it's weather!</p>
            <form onSubmit={handleSubmit}>
                <input placeholder="Location" />
                <button type="submit">Search</button>
            </form>
        </>
    )
};

export { Weather as default }