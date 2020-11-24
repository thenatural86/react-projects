import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Becoming'
  const author = 'Michele Obama'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
