import React from 'react'
import './style.css'
import Chart from 'chart.js';


function Trends({trends}) {
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
            datasets: [
                {
                label: 'Region',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: trends.trend_comparison.regional
                },
                {
                label: 'State',
                backgroundColor: 'rgb(1, 99, 132)',
                borderColor: 'rgb(1, 99, 132)',
                data: trends.trend_comparison.state
                },
                {
                label: 'Nation',
                backgroundColor: 'rgb(200, 58, 3)',
                borderColor: 'rgb(200, 58, 3)',
                data: trends.trend_comparison.nation
                },
            ]
        },

        // Configuration options go here
        options: {}
    });

    return(
        <>
        <div className='row'>
            <div className='col'>
                <h2>Regional Trends</h2>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Location</th>
                <th scope="col">{trends.trend_comparison.start_year}</th>
                <th scope="col">{trends.trend_comparison.end_year}</th>
                <th scope="col">Change</th>
                <th scope="col">% Change</th>
                </tr>
            </thead>
            <tbody>
                {/* Region */}
                <tr>
                <th scope="row">Region</th>
                <td>{trends.trend_comparison.regional[0]}</td>
                <td>{trends.trend_comparison.regional[5]}</td>
                <td>{trends.trend_comparison.regional[5]} - {trends.trend_comparison.regional[0]}</td>
                <td>(({trends.trend_comparison.regional[5]} - {trends.trend_comparison.regional[0]}) / {trends.trend_comparison.regional[5]}) * 100</td>
                </tr>
                {/* State */}
                <tr>
                <th scope="row">State</th>
                <td>{trends.trend_comparison.state[0]}</td>
                <td>{trends.trend_comparison.state[5]}</td>
                <td>{trends.trend_comparison.state[5]} - {trends.trend_comparison.state[0]}</td>
                <td>(({trends.trend_comparison.state[5]} - {trends.trend_comparison.state[0]}) / {trends.trend_comparison.state[5]}) * 100</td>
                </tr>
                {/* Nation */}
                <tr>
                <th scope="row">Nation</th>
                <td>{trends.trend_comparison.nation[0]}</td>
                <td>{trends.trend_comparison.nation[5]}</td>
                <td>{trends.trend_comparison.nation[5]} - {trends.trend_comparison.nation[0]}</td>
                <td>(({trends.trend_comparison.nation[5]} - {trends.trend_comparison.nation[0]}) / {trends.trend_comparison.nation[5]}) * 100</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Trends