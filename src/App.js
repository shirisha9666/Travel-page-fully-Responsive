import React from 'react'
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Hero/Home'
// import CardItem from './components/card/CardsItem'
import Cards from './components/card/Cards'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Cards />} />

            </Routes>
        </>
    )
}

export default App