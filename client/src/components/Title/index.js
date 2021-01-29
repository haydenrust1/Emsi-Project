import React from 'react'
import './style.css'

function Title({ occupation, region }) {
    return (
        <div className='row titleStyle'>
            <div className='col'>
                <h1>{occupation} in {region}</h1>
            </div>
        </div>
    )
}

export default Title