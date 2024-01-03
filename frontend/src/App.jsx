/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBookDetails from './pages/EditBookDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/edit/:id' element={<EditBookDetails />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
    </Routes>
  )
}

export default App
