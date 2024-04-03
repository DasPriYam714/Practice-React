import React from 'react';
import './Country.css';

const Country = ({countryInfo}) => {
    // console.log(countryInfo)
    const {name,flags,capital,timezones,region,cca3} = countryInfo;
    console.log(countryInfo);

    return (
        <div className='countryBorder'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Timezone:{timezones}</p>
            <p>Region:{region}</p>
            <p>CODE: {cca3}</p>
            <button className='btn'>Visited</button>
            
        </div>
    );
};

export default Country;