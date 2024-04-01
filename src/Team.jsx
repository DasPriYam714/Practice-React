import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }


    // second process 
    const removePlayer = () => {
        setTeam( team - 1 )
    }

    return(
        <div>

            <h2>Player: {team}</h2>

            <button onClick={addPlayer}>Add Player</button>

            <button onClick={removePlayer}>Remove Player</button>

        </div>
    )
}