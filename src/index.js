import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    title: 'Fourth Wing (The Empyrean, 1)',
    author: 'Rebecca Yarros',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91qlE6JayPL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    title: 'Lessons in Chemistry: A Novel',
    author: 'Bonnie Garmus',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 3,
  },
]


const BookList = () => {
  
  const gitBook =(id)=>{
    const book=books.find((book)=>book.id===id)
  console.log(book.title);
  }

  return (
    <>
      <h1>top books salles </h1>

      <section className="booklist">
        {books.map((book, index) => {
          //destructuring

          const { image, title, author, id } = book

          // console.log(index)
          return <Book {...book} gitBook={gitBook} index={index}></Book>
        })}
      </section>
    </>
  )
}

const Book = (props) => {
  const { image, title, author,index /*children */, gitBook,id } = props
  const gitSBook=()=>{
gitBook(id)
  }
  return (
    <article className="book">
      <img src={image} />
      <h2>{title}</h2>
      <button onClick={gitSBook} >click me</button>
      <h4> {author}</h4>
      <span className='number'> {index+1}</span>
    </article>
  )
}

export default BookList

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<BookList />)
