import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from 'students/components/header/Header'
import { Footer } from "students/components/footer/Footer";

import { SignIn } from "students/components/user/SignIn";
import { SignUp } from "students/components/user/SignUp";

import { WhatIs } from "students/components/subpages/what-is/WhatIs";
import { HowTo } from "students/components/subpages/how-to/HowTo";
import { Review } from "students/components/subpages/reviews/Review";
import { Class } from "students/components/subpages/classes/Class";
import { Main } from "students/components/main/Main";

import FindPassword from "students/components/user/FindPassword";
import TutorDetail from "commons/items/tutor-item/tutor-detail/TutorDetail";
import ContentDetail from 'commons/items/content-item/content-detail/ContentDetail';

const StudentIndex = () => {
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

export default StudentIndex