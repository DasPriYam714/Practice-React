import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css';

const Countries = () => {

    const[country,setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div className="item">

            <h3>Countries: {country.length}</h3>

            <div className="country-container">
            {
                country.map(country => <Country key={country.cca3} countryInfo={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;