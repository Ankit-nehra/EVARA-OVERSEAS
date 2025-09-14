import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "./Components/Pages/Home"; // ✅ Correct

function App() {
  return (
    <Router> {/* ✅ This must wrap your Routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* More routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
