import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Note from "./pages/Note";
import Header from "./components/Header/Header";
import Fooret from "./components/Footer/Fooret";
import FullWork from "./pages/FullWork";
import FullNote from "./pages/FullNote";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDarkMode);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setTheme(e.matches);
    mediaQuery.addListener(handleChange);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (theme) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    }
  }, [theme]);

  const menuItems = [
    { id: 2, value: "Work", path: "/work" },
    { id: 1, value: "About", path: "/about" },
    { id: 3, value: "Note", path: "/note" },
  ];

  return (
    <div className="content">
      <Header items={menuItems} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<FullWork />} />
          <Route path="/note" element={<Note />} />
          <Route path="/note/:id" element={<FullNote />} />
        </Routes>
      </main>
      <Fooret />
    </div>
  );
}

export default App;
