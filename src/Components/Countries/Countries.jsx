import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css';

const Countries = () => {

    const[country,setCountry] = useState([])
    const [visitedInfo, setVisitedInfo]= useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

    const handleVisitedInfo = country =>{
        console.log(country);
        console.log('I visited this country')
    }
    return (
        <div className="item">

            <h3>Countries: {country.length}</h3>

            <div className="country-container">
            {
                country.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedInfo ={handleVisitedInfo}
                    countryInfo={country}>

                    </Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;