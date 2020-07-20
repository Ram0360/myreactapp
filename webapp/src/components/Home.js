import React, { Component } from 'react'
import '../css/Home.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ContentPage from './ContentPage'
import HttpExample from './HttpExample'

class Home extends Component {
    render() {
        return (
            <Router>
                <div className="main-page">
                    <div className="menu">
                        <nav className="navbar navbar-expand-sm" id="main-menu">
                            <h2 className="menu-title">React Practice Application</h2>
                          
                        </nav>                             
                    </div>
                 <div className="row">
                        <div className="col-sm-2" id="side-menu">
                            <nav className="navbar bg-light">
                            
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                      <NavLink to="/home/link1">Http Example</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/home/link2">Custom Element</NavLink>
                                </li>
                           
                                </ul>

                            </nav>
                        </div>

                        <div className="col-sm-10" id="content-page">
                            <Route path="/home/link1" component={HttpExample}/>
                            <Route path="/home/link2" component={ContentPage}/>
                
                        </div>
                </div>
            </div>
            </Router>
            

         
        )
    }
}


export default Home