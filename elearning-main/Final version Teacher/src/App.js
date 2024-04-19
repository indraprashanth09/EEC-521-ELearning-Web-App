import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import TeacherHomepage from "./pages/TeacherHomepage";
import StudentsProgress from "./pages/StudentsProgress";
import Modify from "./pages/Modify";
import TeachersLogin from "./pages/TeachersLogin";
import mainprogress from "./pages/mainprogress";

import { useEffect } from "react";
import StudentsProgressCopy from "./pages/StudentsProgress copy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/students-progress":
        title = "";
        metaDescription = "";
        break;
      case "/modify":
        title = "";
        metaDescription = "";
        break;
      case "/teachers-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/mainProgress":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TeachersLogin/>} />
      <Route path="/students-progress" element={<StudentsProgress />} />
      <Route path="/modify" element={<Modify />} />
      <Route path="/teacher-homepage" element={<TeacherHomepage />} />
      <Route path="/studentsProgress" element={<StudentsProgressCopy/>}></Route>
    </Routes>
  );
}
export default App;
