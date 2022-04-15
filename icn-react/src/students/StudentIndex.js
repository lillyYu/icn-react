import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Career from './components/subpages/career/Career'
import Content from './components/subpages/content/Content'
import OneToOneClass from './components/subpages/one-to-one-class/OneToOneClass'
import Tutor from './components/subpages/tutor/Tutor'
import './components/scss/subpages/subpages.scss';
import ClassRegister from './components/subpages/class-register/ClassRegister'

const StudentIndex = () => {
  return (
    <>
      <Header />

      <div className="mainWrap">
        <Routes>
          {/* Sub pages - Nav */}
          <Route path="/" element={<Main />} />
          <Route path="/1:1-class" element={<OneToOneClass />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/content" element={<Content />} />
          <Route path="/career" element={<Career />} />

          {/* detail pages */}
          <Route path="/class-register" element={<ClassRegister />} />
        </Routes>
      </div>

      <Footer />

    </>
  )
}

export default StudentIndex