import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg',
    title: 'Becoming',
    author: 'Michele Obama',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/811W9hHXiwL._AC_UL200_SR200,200_.jpg',
    title: 'Ready Player Two',
    author: 'Ernest Cline',
  },
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, id) => (
        <Book key={id} {...book} />
      ))}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
