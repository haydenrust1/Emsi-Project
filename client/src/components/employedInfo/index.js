import React from 'react'
import './style.css'

function Info({info}) {
    return(
        <div className='row'>
            <div className='col'>
                <h2>Occupation Summary for{info.occupation.title}</h2>
            </div>
        </div>

    )
}

export default Info