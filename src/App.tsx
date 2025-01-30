import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <Router>
      <main className=" min-w-full min-h-[700px] bg-green-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
