import React from 'react'
import Jumbotron from '../Jumbotron'

function Header(props) {
    return(
        <nav>
            <Jumbotron>
                <h1 class="display-4">Occupation Overview</h1>
                <hr class="my-4"></hr>
            </Jumbotron>
        </nav>
    )
}

export default Header

// {props.jobTitle} in {props.location}