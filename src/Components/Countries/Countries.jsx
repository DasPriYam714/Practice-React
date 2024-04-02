import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const[country,setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>

            <h3>Countries: {country.length}</h3>
            {
                country.map(country => <Country countryInfo={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;