import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg',
  title: 'Becoming',
  author: 'Michele Obama',
}

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
  title: 'A Promised Land',
  author: 'Barack Obama',
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, saepe
          maxime? Mollitia rem eos tempore nisi dolores nihil! Facilis,
          reprehenderit?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
