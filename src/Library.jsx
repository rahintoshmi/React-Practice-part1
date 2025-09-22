import Book from "./Book";

export default function Library({books}){
    return(
        <div>
            <h3>Collection: {books.length}</h3>
            <ul>
                {books.map(book => 
                    <Book key={book.id} book={book}></Book>
                )}
            </ul>
        </div>
    )
}
