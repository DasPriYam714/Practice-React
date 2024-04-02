import React from 'react';

const Country = ({countryInfo}) => {
    // console.log(countryInfo)
    const {name} = countryInfo;

    return (
        <div>
            <h3>Name: {name.common}</h3>
            
        </div>
    );
};

export default Country;