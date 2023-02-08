import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fiction } from "./Pages/Fiction";
import { JS } from "./Pages/JS";
import { SciFi } from "./Pages/SciFi";
import { Thriller } from "./Pages/Thriller";
import { Psychology } from "./Pages/Psychology";
import { Love } from "./Pages/Love";
import { MainPage } from "./MainPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/javascript" element={<JS />} />
          <Route exact path="/fiction" element={<Fiction />} />
          <Route exact path="/psychology" element={<Psychology />} />
          <Route exact path="/scifi" element={<SciFi />} />
          <Route exact path="/love" element={<Love />} />
          <Route exact path="/thriller" element={<Thriller />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
