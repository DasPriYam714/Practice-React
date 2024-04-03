import React from 'react';
import './Country.css';

const Country = ({countryInfo}) => {
    // console.log(countryInfo)
    const {name,flags} = countryInfo;
    console.log(countryInfo);

    return (
        <div className='countryBorder'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            
        </div>
    );
};

export default Country;