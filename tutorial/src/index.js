import React from 'react'
import ReactDOM from 'react-dom'

const BookList = () => {
  return (
    <section>
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
    <article>
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

const Title = () => <h1>Becoming Becoming</h1>
const Author = () => <h4>Michele Obama</h4>

ReactDOM.render(<BookList />, document.getElementById('root'))
