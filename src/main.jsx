import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fiction } from './Pages/Fiction';
import { JS } from './Pages/JS';
import { SciFi } from './Pages/SciFi';
import { Thriller} from './Pages/Thriller';
import { Psychology } from './Pages/Psychology';
import { Love } from './Pages/Love';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/javascript" element={<JS />} />
        <Route exact path="/fiction" element={<Fiction />} />
        <Route exact path="/psychology" element={<Psychology />} />
        <Route exact path="/scifi" element={<SciFi />} />
        <Route exact path="/love" element={<Love />} />
        <Route exact path="/thriller" element={<Thriller />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
