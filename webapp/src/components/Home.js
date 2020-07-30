import React, { Component } from 'react'
import '../css/Home.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ContentPage from './ContentPage'
import HttpExample from './HttpExample'
import ShoppingCart from './ShoppingCart'

class Home extends Component {
    constructor(props) {
        super(props)

        if(localStorage.user_login_id === "" || localStorage.user_login_id === undefined)
        {
            this.props.history.push('/');
        }
    }
    

    render() {
        return (
            <Router>
                <div className="main-page">
                    <div className="menu">
                        <nav className="navbar navbar-expand-sm" id="main-menu">
                            <h2 className="menu-title">React Practice Application</h2> 
                            <button className="btn-btn-primary" onClick={(event) => this.doLogout(event)}>Logout</button>                         
                        </nav>                             
                    </div>
                 <div className="row">
                        <div className="col-sm-2" id="side-menu">
                            <nav className="navbar bg-light">
                            
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                      <NavLink to="/home/httpexample">Http Example</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/home/customelement">Custom Element</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/home/shop">Lit Shopping Cart</NavLink>
                                </li>

                                </ul>

                            </nav>
                        </div>

                        <div className="col-sm-10" id="content-page">
                            <Route path="/home/httpexample" exact component={HttpExample}/>
                            <Route path="/home/customelement" exact component={ContentPage}/>  
                            <Route path="/home/shop" exact component={ShoppingCart}/>  
                        </div>
                </div>
            </div>
            </Router>
            

         
        )
    }


    doLogout(event)
    {
        localStorage.user_login_id = "";
        localStorage.user_login_pswd = "";
        this.props.history.push('/');
    }
}


export default Home