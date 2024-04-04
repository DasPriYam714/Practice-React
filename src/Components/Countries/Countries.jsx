import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css';
import { list } from "postcss";

const Countries = () => {

    const[country,setCountry] = useState([])
    const [visitedInfo, setVisitedInfo]= useState([])
    const[visitedFlags, setVisitedFlags]= useState([])



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])


    // visited country

    const handleVisitedInfo = country =>{
        
        console.log('I visited this country')
// array length
        const newVisitedCountries = [...visitedInfo, country];
        setVisitedInfo(newVisitedCountries);
    }

    // visited Flags
    const handleVisitedFlags = flag =>{
        console.log('I visited this flag');

        const newVisitedFlags =[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }




    return (
        <div className="item">

            <h3>Countries: {country.length}</h3>

            {/* array length  */}
            {/* Display Visited Countries */}

            <h3>Visited Country: {visitedInfo.length}</h3>
            <ul>
                {
                    visitedInfo.map(country=> <li key= {country.cca3}>{country.name.common} </li>)
                }
            </ul>

            <ul>
                {
                    visitedFlags.map((flag, index)=> <li key={index}> <img  src={flag.flags.png} /> </li>)

                }
            </ul>

            <div className="country-container">
            {
                country.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedInfo ={handleVisitedInfo}
                    handleVisitedFlags ={handleVisitedFlags}
                    countryInfo={country}>

                    </Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;