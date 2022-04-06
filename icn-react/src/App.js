import { Header } from "components/header/Header";
import { SignIn } from "components/user/SignIn";
import { SignUp } from "components/user/SignUp";
import { Route, Routes } from "react-router-dom";

import 'commons/scss/master.scss';
import { WhatIs } from "components/subpages/what-is/WhatIs";
import { HowTo } from "components/subpages/how-to/HowTo";
import { Review } from "components/subpages/reviews/Review";
import { Class } from "components/subpages/classes/Class";
import { Main } from "components/main/Main";

// slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "components/footer/Footer";
import FindPassword from "components/user/FindPassword";

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
          <Route path="/find-password" element={<FindPassword />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
