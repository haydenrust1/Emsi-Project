import React from 'react'
import './style.css'

function Jumbotron(props) {
    return(
        <div className="jumbotron jumbotron-fluid">
            {props.children}
        </div>
    )
}

export default Jumbotron