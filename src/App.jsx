import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Counter from './Counter'

function App() {

  const cricketers =['Tamim', 'Sakib', 'Litton', 'Riad']

  const singers= [
    {id:1, name:'Atif', age: 30},
    {id:2, name:'Arijit', age: 40},
    {id:3, name:'Ripon', age:45}

  ]

  const books=[
    {id:1, name:'Math', price:200},
    {id:2, name:'English', price:250},
    {id:3, name:'Bangla', price:300},
    {id:4, name:'Social Science', price:350},

  ]

  function handleClick(){
    alert("click me!!")
  }

  // with parameters
  function eventClick(num){
    alert(`param ${num} and sum ${num +5}`)
  }
  

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

      <BookStore book={books}> </BookStore>

      <Counter></Counter>



      <Person></Person>
      <Developer></Developer>
      <Student name="Jon" id={24} age={24}></Student>
      <Student name="Don"  age={24}></Student>
      <Task task={"do the work"} isDone={false}></Task>
      <Task task={"Thanks for doing the work"} isDone={true}></Task>

      <Actor name="Bappa Raj"></Actor>

      {
        cricketers.map(cricketers=> <Actor name={cricketers}></Actor>)
      }

      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }

      {/* event handler type 1 */}

      <button onClick={handleClick}>Click</button>

      {/* event handler type 2 with anonymus arrow function*/}

      <button onClick={() => {alert ('why you click this button??')}}> Click Me</button>

      {/* event handler type 3 with parameters why we need to use arrow function. */}
      <button onClick={() => eventClick(6)}>Magic Button</button>
      
      
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
// here we can use default values so here we use id=1 as a default value

function Student({name, id=1, age}){ 

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
