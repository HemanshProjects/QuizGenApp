import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Createquiz from "./components/Createquiz/Createquiz";
import MyQuiz from "./components/MyQuizz/MyQuiz";
import PlayQuiz from "./components/PlayQuiz/PlayQuiz";
import MainQuiz from "./components/PlayQuiz/MainQuiz";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-quiz" element={<Createquiz/>} />
        <Route path="/my-quiz" element={<MyQuiz/>} />
        <Route path="/play-quiz" element={<PlayQuiz/>} />
        <Route path="/quiz" element={<MainQuiz/>} />
      </Routes>
    </>
  );
}

export default App;
