import { Route, Routes } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <TopNavbar/>
      
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/aboutus" element={<About />} />
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
