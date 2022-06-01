import React from 'react'

const BookCard = ({book, user}) => {
  return (
    <div>
        <h2>{book.title}</h2>
        <h3>By: {book.author}</h3>
        <img src={book.image_url} />
        <h3>{book.summary}</h3>
        <br></br>
        <br></br>
    </div>
  )
}

export default BookCard