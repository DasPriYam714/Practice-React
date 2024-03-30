import Book from "./Book"


 export default function BookStore({book}) { 
    return(
        <div className="border">
            <h3>Book: {book.length}</h3>

            {
               book.map (book => <Book book={book}></Book>)
            }
        </div>
    )
}