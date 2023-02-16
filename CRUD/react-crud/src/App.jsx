import { Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
