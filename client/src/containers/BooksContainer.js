import BooksList from "../components/BooksList";
import { useEffect, useState } from "react";

const BooksContainer = ({user}) => {
    const [books, setBooks] = useState([])

    useEffect(() => {   
            fetch("/api/books")
            .then(resp => resp.json())
            .then(data => {
                setBooks(data)
              })
      }, []);


const handleClick = (e) => {
    e.preventDefault();
    fetch("/api/order-books")
        .then(resp => resp.json())
            .then(data => {
                setBooks(data)
              })
}
    

  return (
    <div>
        <button onClick={handleClick}> Order by title</button>
        <BooksList user={user} books={books} />
        
    </div>
  )
}

export default BooksContainer