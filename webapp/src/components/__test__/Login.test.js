import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import Login from '../Login'

it("renders without crashing", () =>{
    const div = createElement("div")
    ReactDOM.render(<Login></Login>, div)
})