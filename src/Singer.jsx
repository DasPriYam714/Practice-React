export default function Singer({singer}){
    return(
        <div>
            <h2>ID: {singer.id} </h2>
            <h3>Name: {singer.name} </h3>
            <h3>Age: {singer.age}</h3>
        </div>
    )
}