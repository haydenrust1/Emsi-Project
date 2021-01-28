import React from 'react'
import './style.css'

 const JobAmount = ({amount}) => {
        let growthSummary = Math.round(((amount.summary.jobs.regional - amount.summary.jobs.national_avg) / amount.summary.jobs.national_avg) * 100);


    return(
        <div className='row'>
        <div className='col'>
            <h2>{amount.summary.jobs.regional}</h2>
            <p>jobs in {amount.summary.jobs.year}</p>
            <p>{growthSummary}% 
            {Math.sign(growthSummary) === 1 
            ?
            ' above ' 
            :
            ' below '
            }
            national average
            </p>
        </div>
        {/* job growth */}
        <div className='col'>
            <h2>{amount.summary.jobs_growth.regional}%</h2>
            <p>{`% change from ${amount.summary.jobs_growth.start_year} to ${amount.summary.jobs_growth.end_year}`}</p>
            <p>Nation: {amount.summary.jobs_growth.national_avg}</p>
        </div>
        {/* job wage */}
        <div className='col'>
            <h2>${amount.summary.earnings.regional}/hr</h2>
            <p>Median Hourly Earnings</p>
            <p>Nation: ${amount.summary.earnings.national_avg}/hr</p>
        </div>
    </div>

    )
}

export default JobAmount