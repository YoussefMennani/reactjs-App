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
import AddFormation from './components/addFormation';



function App() {
  return (
    <div className='container'>

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded" style={{margin:"10px 0px"}}>
          <a className="navbar-brand" href="#" style={{margin:"0px 10px"}}>Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <Link to="/Formation" className="nav-link" >Formation</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
            
            </ul>
          </div>
        </nav>

          
      
          <Routes>
            <Route path="/Formation" element={<Formation />} />
            <Route path="/About" element={<About />} />
            <Route path="/addFormation" element={<AddFormation />} />
          </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
