import React from 'react'
import CustomHeading from './WebComponent'

function ContentPage() {
    return (
        <div>
            <div className="jumbotron">
                <h1>React Custom HTML Element Example</h1>      
                <p>After clicking the content, the element color will change to green color
                </p>
            </div>

           <custom-heading>This text uses custom html element. Once user clicks the color will change to green</custom-heading>
        </div>
    )
}

export default ContentPage
