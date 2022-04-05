import { Header } from "components/header/Header";
import { SignIn } from "components/user/SignIn";
import { SignUp } from "components/user/SignUp";
import { Route, Routes } from "react-router-dom";

import 'commons/scss/master.scss';
import { WhatIs } from "components/subpages/whatIs/WhatIs";
import { HowTo } from "components/subpages/howTo/HowTo";
import { Review } from "components/subpages/review/Review";
import { Class } from "components/subpages/class/Class";
import { Main } from "components/main/Main";

// slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "components/footer/Footer";

function App() {
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

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
