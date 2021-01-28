import React from 'react'
import './style.css'

function Summary({summary}) {
    return(
        <div className='row'>
            <div className='col'>
                <h2>Occupation Summary for {summary.occupation.title}</h2>
            </div>
        </div>

    )
}

export default Summary