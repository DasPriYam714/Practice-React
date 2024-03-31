import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const addAddition = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const addReduce= () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div style={{border: '5px solid green', margin: '15px'}}>

            <h3>Counter: {count}</h3>


            <button style={{border: '2px solid yellow'}} onClick={addAddition}>Addition</button>
            <button style={{border: '2px solid yellow'}} onClick={addReduce}>Reduce</button>
        </div>
    )
}