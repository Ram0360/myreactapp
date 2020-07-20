import React, { Component } from 'react'
import axios from 'axios'
import '../css/Home.css'
import { Table } from 'reactstrap';

export class HttpExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({posts : response.data})
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render() {
        const { posts } = this.state

        const renderPost = (posts, index) =>
        {
            return(
                <tr  key={index}>
                    <td>{posts.id}</td>
                    <td>{posts.userId}</td>
                    <td>{posts.title}</td>
                </tr>
            )
        }
        return (
            <div className="table-content">

            <div className="jumbotron">
                <h1>React Http Example</h1>      
                <p>This page contains Http example using react js. This page also uses array map in ECMA script and Router Concepts
                Table is used from Reactstrap
                </p>
                <p>axios is used for http calls</p>
            </div>

                <h4>Total number of Posts available : {posts.length}</h4>

                <div className="container">
                    <Table striped  id="http-table">
                            <thead>
                                <tr>
                                    <th>Post ID</th>
                                    <th>User ID</th>
                                    <th>Post Content</th>
                                </tr>                                            
                            </thead>
                            	
                            <tbody>
                                {posts.map(renderPost)}                                
                            </tbody>  

                    </Table>
                </div>

               
            </div>
        )
    }
}

export default HttpExample
