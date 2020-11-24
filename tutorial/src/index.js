import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
)

const Title = () => <h1>Becoming</h1>
const Author = () => <h4>Michele Obama</h4>

ReactDOM.render(<BookList />, document.getElementById('root'))
