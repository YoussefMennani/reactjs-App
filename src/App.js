import React from 'react';
import Formation from './components/Formation';
import Menu from './components/Menu';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';



function App() {
  return (
    <div className='container'>
      
      
        <BrowserRouter>
          <ul>
            <li><Link to="/Formation">Formation</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>

          <Routes>
            <Route path="/Formation" element={<div className='row'><Formation /></div>} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
