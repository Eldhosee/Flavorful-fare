import React from 'react'
import Home from './components/home'

import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './components/recipe'
import Details from './components/details'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipe' element={<Recipe/>}/>
    <Route path='/recipe/details' element={<Details/>}/>
    <Route path='/*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App