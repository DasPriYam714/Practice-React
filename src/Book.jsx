import './Book.css'
export default function Book({book}){
    const {id, name, price}= book;

    return(
        <div className='devStyles'>
            <h2>Id: {id}</h2>
            <h3>Book Name: {name}</h3>
            <h3>Price: {price}</h3>
        </div>
    )
}