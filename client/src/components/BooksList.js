import BookCard from "./BookCard";

const BooksList = ({user, books}) => {
    const renderBooks = () => {
        return (
          <div>
          {books.map(book => <BookCard key={book.id} book={book} user={user} />)}
          </div>  
        )
    }
  return (
    <div>{renderBooks()}</div>
  )
}

export default BooksList