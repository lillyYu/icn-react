import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../students/components/header/Header'
import { Footer } from './components/footer/Footer'
import Main from './components/main/Main'

const TutorIndex = () => {
  return (
    <>
      <Header />

      <div className="mainWrap">
        <Routes>
          {/* Sub pages - Nav */}
          <Route path="/" element={<Main />} />
          
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default TutorIndex