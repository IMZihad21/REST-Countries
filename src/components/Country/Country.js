import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, flags, population} = props.country;
    return (
        <div className="country-container">
            <img src={flags[0]} alt=""/>
            <h3>{name}</h3>
            <p>Capital is : {capital}</p>
            <p>Polpulation is: {population}</p>
        </div>
    );
};

export default Country;