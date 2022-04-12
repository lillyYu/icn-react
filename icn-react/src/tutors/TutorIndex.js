import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import Main from './components/main/Main'
import AboutUs from './components/subpages/about-us/AboutUs'
import Faq from './components/subpages/faq/Faq'
import PrivacyPolicy from './components/subpages/privacy-policy/PrivacyPolicy'
import FindPassword from './components/user/FindPassword'
import { SignIn } from './components/user/SignIn'
import { SignUp } from './components/user/SignUp'

const TutorIndex = () => {
  return (
    <>
      <Header />

      <div className="mainWrap">
        <Routes>
          {/* Sub pages - Nav */}
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* sign-up & sign-in */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/find-password" element={<FindPassword />} />

          {/* Detail pages -------------------------------- */}
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default TutorIndex