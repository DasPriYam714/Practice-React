export default function Friend({friend}){
    const {name, email} = friend;
    console.log(name);
    return(
        <div style={{border: '5px solid green', margin: '5px', borderRadius: '10px'}}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    )
}