import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Note from "./pages/Note";
import Header from "./components/Header/Header";
import Fooret from "./components/Footer/Fooret";

function App() {
  return (
    <>
      <div className="shadow"></div>
      <div className="content">
        <Header />
        <main className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/note" element={<Note />} />
          </Routes>
        </main>
        <Fooret />
      </div>
    </>
  );
}

export default App;
