import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import { WhatIs } from './components/subpages/what-is/WhatIs';
import { HowTo } from './components/subpages/how-to/HowTo';
import { Review } from './components/subpages/reviews/Review';
import { Class } from './components/subpages/classes/Class';
import { SignUp } from './components/user/SignUp';
import { SignIn } from './components/user/SignIn';
import FindPassword from './components/user/FindPassword';
import ContentDetail from 'commons/items/content-item/content-detail/ContentDetail';
import TutorDetail from 'commons/items/tutor-item/tutor-detail/TutorDetail';


const LandingIndex = () => {
  return (
    <>
      <Header />
  
        <div className="mainWrap">
          <Routes>
            {/* Sub pages - Nav */}
            <Route path="/" element={<Main />} />
            <Route path="/whatIs" element={<WhatIs />} />
            <Route path="/howTo" element={<HowTo />} />
            <Route path="/review" element={<Review />} />
            <Route path="/class" element={<Class />} />
  
            {/* sign-up & sign-in */}
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/find-password" element={<FindPassword />} />
  
            {/* Detail pages -------------------------------- */}
            <Route path="/class/:className" element={<ContentDetail />} />
            <Route path="/tutor/:tutorId" element={<TutorDetail />} />
          </Routes>
        </div>
  
      <Footer />
    </>
  )
}

export default LandingIndex