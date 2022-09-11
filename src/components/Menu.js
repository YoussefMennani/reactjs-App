import React,{Component} from "react";
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import About from "./About";
import Formation from "./Formation";


class Menu extends Component{
    render(){

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded my-2" >
                <a className="navbar-brand mx-3" href="#">Navbar</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                   {/* <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a> */}





                    </div>
                </div>
            </nav>
            
            
              );
              
    }
}

export default Menu