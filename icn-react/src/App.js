import { Header } from "components/header/Header";
import { Main } from "components/Main";
import { AboutUs } from "components/subpages/about-us/AboutUs";
import { Career } from "components/subpages/career/Career";
import { Class } from "components/subpages/class/Class";
import { Faq } from "components/subpages/faq/Faq";
import { Tutor } from "components/subpages/tutor/Tutor";
import { SignIn } from "components/user/SignIn";
import { SignUp } from "components/user/SignUp";
import { Route, Routes } from "react-router-dom";

import 'commons/scss/master.scss';

function App() {
  return (
    <>
      <Header />

      <div className="mainWrap">
        <Routes>
          {/* Sub pages - Nav */}
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/class" element={<Class />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/career" element={<Career />} />
          <Route path="/faq" element={<Faq />} />

          {/* sign-up & sign-in */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
