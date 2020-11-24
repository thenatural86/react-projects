import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { data } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <section className='booklist'>
      {data.map((book, id) => (
        <Book key={id} {...book} />
      ))}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
