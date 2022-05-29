import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/style.scss";
import Receips from "./pages/Receips";
import Sittings from "./pages/Sittings";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main container">
          <Routes >
            <Route path="/foodiesh/" element={<Home />} />
            <Route path="/receips" element={<Receips />} />
            <Route path="/sittings" element={<Sittings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
