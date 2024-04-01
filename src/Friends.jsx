import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){

    const [friends, useFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => useFriends(data))
    },[])
    return(
        <div style={{border: '5px solid blue', borderRadius: '10px'}}>
            <h2>Friends: {friends.length}</h2>

            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    )
}