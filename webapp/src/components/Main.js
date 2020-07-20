import React, { Component } from 'react'
import Login from './Login'
import '../css/Home.css'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Main extends Component {
    

    render() {
        return (
            <Router>
            <div className='home-page'>
  
                <Route path="/" exact strict component={Login}/>

                <Route path="/home" exact strict component={Home}/>
                
            </div>
        </Router>
           
           
        )
    }
}

export default Main