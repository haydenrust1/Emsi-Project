import React from 'react'
import './style.css'

function Title({title}) {
    return(
        <div className='row'>
            <div className='col'>
                <h1>{title.occupation.title} in {title.region.title}</h1>
            </div>
        </div>
    )
}

export default Title