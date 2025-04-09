import React from 'react'
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<UserDetail />} />
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
