import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Capital is : {props.capital}</p>
            <p>Polpulation is: {props.population}</p>
        </div>
    );
};

export default Country;