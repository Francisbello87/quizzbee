import Blob from "./components/Blob";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Question from "./pages/Question";
import Onboarding from "./pages/Onboarding";
import ResultScreen from "./pages/ResultScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Blob />
          <Routes>
            <Route exact path="/" element={<Onboarding />} />
            <Route path="/questions" element={<Question />} />
            <Route path="/scores" element={<ResultScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
