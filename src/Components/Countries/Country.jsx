import React, { useState } from 'react';
import './Country.css';

const Country = ({countryInfo, handleVisitedInfo,handleVisitedFlags}) => {
    const [visited,setVisited]= useState(false)


    

    const passWithParams = () => {
        setVisited(!visited);
        handleVisitedInfo(countryInfo);
        handleVisitedFlags(countryInfo);
    }




    // For single Click events

    // const handleClick = () => {
    //     setVisited(true);
    // }




// for double click events
    const handleClick = () => {
        
    }



    // console.log(countryInfo)
    const {name,flags,capital,timezones,region,cca3} = countryInfo;
    console.log(countryInfo);

    return (
    <div className={`countryBorder ${visited && 'background-container'}`}>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Timezone:{timezones}</p>
            <p>Region:{region}</p>
            <p>CODE: {cca3}</p>

            {/* For single Click Events */}

            {/* <button className='btn' onClick={handleClick}>Visited</button>
            {visited && 'I visited this country'} */}


            {/* For  ternary operator events */}
            {/* <button className='btn' onClick={handleClick}>Visited</button>
            {visited ? 'I visited this country' : 'I need to visit this country'} */}

<button className='btn' onClick={passWithParams}>{visited ? 'Visited': 'Going'}</button>
            {visited ? 'I visited this country' : 'I need to visit this country'}
            
        </div>
    );
};

export default Country;