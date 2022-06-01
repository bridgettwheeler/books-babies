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


  return (
    <div>
        <BooksList user={user} books={books} />
    </div>
  )
}

export default BooksContainer