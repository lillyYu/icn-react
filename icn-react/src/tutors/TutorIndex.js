import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import Main from './components/main/Main'
import AboutUs from './components/subpages/about-us/AboutUs'
import TopicDetail from './components/subpages/faq/details/TopicDetail'
import Faq from './components/subpages/faq/Faq'
import PrivacyPolicy from './components/subpages/privacy-policy/PrivacyPolicy'
import FindPassword from './components/user/FindPassword'
import { SignIn } from './components/user/SignIn'
import { SignUp } from './components/user/SignUp'
import TutorInformation from './components/user/TutorInformation'
import VerifyEmail from './components/user/VerifyEmail'

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
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/information" element={<TutorInformation />} />

          {/* Detail pages -------------------------------- */}
          <Route path="/faq/:topicName" element={<TopicDetail />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default TutorIndex