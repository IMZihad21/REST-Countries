import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [ countries, setCountries ] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            {
                countries.map(country => <Country name={country.name}></Country>)
            }
        </div>
    );
};

export default Countries;