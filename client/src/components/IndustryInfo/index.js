import React from 'react'
import './style.css'

function Info({ info }) {
    let year = info.employing_industries.year;

    return (
        <>
            <h2>Industries Employing {info.occupation.title}</h2>
            <div className='row info'>
                <div className='col'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Industry</th>
                                <th scope="col">Occupation Jobs in Industry ({year})</th>
                                <th scope="col">% of Occupation in Industry ({year})</th>
                                <th scope="col">% of Total Jobs in Industry ({year})</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* creating new */}
                            {info.employing_industries.industries.map((el, index) => {
                                let occupationJob = el.in_occupation_jobs
                                let industryJob = el.jobs

                                let totalJobs = (occupationJob / industryJob) * 100
                                totalJobs = Math.round((totalJobs + Number.EPSILON) * 100) / 100

                                let inIndustryJobs = (occupationJob / info.employing_industries.jobs) * 100
                                inIndustryJobs = Math.round((inIndustryJobs + Number.EPSILON) * 100) / 100

                                return (
                                    <tr key={index}>
                                        <td scope="row">{el.title}</td>
                                        <td>{occupationJob}</td>
                                        <td>{inIndustryJobs}</td>
                                        <td>{totalJobs}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Info