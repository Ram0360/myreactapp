import React, { Component } from 'react'
import '../css/Login.css'


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user_name :'',
            pass_word : '',
            isLoggedIn : false
        }
    }

      
    render() {
        // if(this.state.isLoggedIn === false)
        // {
            return (
                <div className="login-app-page">
                    <div id="login-page-div" data-testid= "login-div">
                    <div className="panel panel-default">
                   
                        <div className="panel-heading">
                            <h2 className="login-title">React Practice</h2>
                        </div>
                        <div className="login-page  panel-body">
                            <form>
                                <div className="form-group">
                                <label>User name:</label>
                                <input type="uname" className="form-control" id="uname" 
                                placeholder="Enter user name" name="email"
                                autoComplete="off" 
                                value = {this.state.user_name}
    
                                onChange = {(event) => 
                                    this.setState({user_name : event.target.value})
                                }
                                />
                                </div>
    
                                <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" id="pwd"
                                placeholder="Enter password" name="pswd"
                                onChange = {(event) => 
                                    this.setState({pass_word : event.target.value})
                                }
                                />
                                </div>
                                
                                {/* <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                                </label>
                                </div> */}
                                <br/>
                                <button type="submit" className="btn btn-primary"
                                onClick = {(event) => this.loginuser(event)}
                                >Login</button>

                            </form>
                        </div>
                    </div>                                 
                </div>
                </div>

               
            )              
    }

    
    loginuser(event)
    {
        // alert(`${this.state.user_name} ${this.state.pass_word} ${this.state.isLoggedIn}`)
        console.log(this.state.user_name);
        console.log(this.state.pass_word);

        if(this.state.user_name === 'Ram' && this.state.pass_word ==='admin')
        {   
            this.setState({isLoggedIn:true})
            console.log('Login succesful');
            event.preventDefault(); 
            this.props.history.push('/home');
            localStorage.setItem("user_login_id",this.state.user_name);
            localStorage.setItem("user_login_pswd",this.state.pass_word);
        }
        else{
            alert('Enter the correct user id and password');
            this.props.history.push('/');
        }
        
    }    

}

export default Login