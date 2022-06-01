import React from 'react'
import BooksContainer from '../containers/BooksContainer'

const Books = ({user, books}) => {
  return (
    <div>
        <h1>Library:</h1>
            <BooksContainer user={user} books={books}/>
    </div>
  )
}

export default Books