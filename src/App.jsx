import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Person></Person>
      <Developer></Developer>
      <Student name="Jon" id={24} age={24}></Student>
      
      
    </>
  )
}

// dynamic call
function Person(){
  const person ={name: 'Priyam', Age : 24, salary: 20, cost : 18}
  return <h3>I am {person.name} with age {person.Age}. my salary is {person.salary} and monthly cost is {person.cost}. So monthly save is {person.salary - person.cost}. </h3>

}

function Developer(){
const developerStyles={
  margin: '20px',
  border: '2px solid blue',
  borderRadius: '5px'
}

return (
  <div>
    <h2 style={developerStyles}>Hello Developer</h2>
  </div>
)

}


// add destructuring

function Student({name, id, age}){

  const developerStyle2={
    margin: '20px',
    border: '2px solid purple',
    borderRadius: '5px'
  }

  return (

  <div style={developerStyle2}>
    <h3>I am a Student</h3>
    <p>Name: {name}</p>
    <p>Id: {id}</p>
    <p>Age: {age}</p>
  </div>
  )
  
}

export default App
