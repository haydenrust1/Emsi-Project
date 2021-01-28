import React from 'react'
import Jumbotron from '../Jumbotron'

function Header() {
    return(
        <nav>
            <Jumbotron>
                <h1 className="display-4">Occupation Overview</h1>
                <hr className="my-4"></hr>
            </Jumbotron>
        </nav>
    )
}

export default Header

