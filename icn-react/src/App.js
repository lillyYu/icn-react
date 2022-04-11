import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'commons/scss/master.scss';
// slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TutorIndex from "tutors/TutorIndex";
import StudentIndex from "students/StudentIndex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/students/*" element={<StudentIndex />} />
          <Route path="/tutors/*" element={<TutorIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
