import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageMain1 from "./pages/HomepageMain1";
import Results from "./pages/Results";
import QuizPage from "./pages/QuizPage";

import VideoContent from "./pages/VideoContent";
import LevelsPage from "./pages/LevelsPage";
import LevelTopics from "./pages/LevelTopics";
import CoursesPage from "./pages/CoursesPage";
import HomepageMain2 from "./pages/HomepageMain2";
import Signup from "./pages/Signup";
import SignUpLogin from "./pages/SignUpLogin";
import { useEffect } from "react";

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
      case "/quiz-page":
        title = "";
        metaDescription = "";
        break;
      case "/progress":
        title = "";
        metaDescription = "";
        break;
      case "/video-content":
        title = "";
        metaDescription = "";
        break;
      case "/levels-page":
        title = "";
        metaDescription = "";
        break;
      case "/level-topics":
        title = "";
        metaDescription = "";
        break;
      case "/courses-page":
        title = "";
        metaDescription = "";
        break;
      case "/homepagemain2":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/sign-uplogin":
        title = "";
        metaDescription = "";
        break;
      case "/homepagemain1":
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
      <Route path="/" element={<HomepageMain1 />} />
      <Route path="/quiz-page" element={<QuizPage />} />
      <Route path="/video-content" element={<VideoContent />} />
      <Route path="/levels-page" element={<LevelsPage />} />
      <Route path="/level-topics" element={<LevelTopics />} />
      <Route path="/courses-page" element={<CoursesPage />} />
      <Route path="/homepagemain2" element={<HomepageMain2 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sign-uplogin" element={<SignUpLogin />} />
      <Route path="/results" element={< Results/>} />
    </Routes>
  );
}
export default App;
