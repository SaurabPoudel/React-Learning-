import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
