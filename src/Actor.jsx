
const developerStyles={
    margin: '20px',
    border: '2px solid blue',
    borderRadius: '5px'
  }
export default function Actor({name}) {
return ( 
<div style={developerStyles}><li>Name: {name}</li>
</div>
)}