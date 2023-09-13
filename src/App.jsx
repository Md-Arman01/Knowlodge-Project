
import { useState } from 'react'
import './App.css'
import Head from './components/header/Head'
import BookMark from './components/header/bookmark/bookMark'
import Carts from './components/header/carts/Carts'

function App() {

  const [mark, setMark] = useState([])
  const [count, setCount] = useState(0);

  const markHandle = (cart) =>{
    const newMark = [...mark , cart]
    setMark(newMark)
  }

  const countHandle = (reading_time , id) => {
    console.log(id)
     const newCount = count + reading_time
     setCount(newCount)
     const removedBookMark = mark.filter(book => (book.id !== id))
     setMark(removedBookMark)
  }

  return (
    <>
    <div className='container mx-auto'>
      <Head></Head>
      <main className='flex gap-7'>
      <Carts countHandle={countHandle} markHandle={markHandle}></Carts>
      <BookMark count={count} mark={mark}></BookMark>
      </main>
    </div>
      
    </>
  )
}

export default App
