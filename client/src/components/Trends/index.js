import React, { useEffect, useState } from 'react'
import './style.css'
import Chart from 'chart.js';


function Trends({ trends }) {
    const [arrayOfYears, setarrayOfYears] = useState();

    useEffect(() => {
        yearArrGenerator();

        const ctx = 'myChart';
        const myChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: arrayOfYears,
                datasets: [
                    {
                        label: 'Region',
                        fill: false,
                        borderColor: 'rgb(100, 200, 9)',
                        data: jobPercentChanger(trends.trend_comparison.regional)
                    },
                    {
                        label: 'State',
                        fill: false,
                        borderColor: 'rgb(1, 99, 132)',
                        data: jobPercentChanger(trends.trend_comparison.state)
                    },
                    {
                        label: 'Nation',
                        fill: false,
                        borderColor: 'rgb(200, 58, 3)',
                        data: jobPercentChanger(trends.trend_comparison.nation)
                    },
                ]
            },

            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Percent Changed'
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }, []);

    // creates dynamic array of years 
    const yearArrGenerator = () => {
        let yearsArray = [];
        let frontArr = trends.trend_comparison.start_year;
        let endArr = trends.trend_comparison.end_year;

        while (frontArr < endArr) {
            if (yearsArray.length === 0) {
                yearsArray.push(frontArr)
            }
            yearsArray.push(frontArr += 1)
        }

        setarrayOfYears(yearsArray);
    }

    // creates dynamic array of job percent change
    const jobPercentChanger = (arr) => {
        let array = [];

        for (var i = 0; i < arr.length - 1; i++) {
            let current = arr[i];
            let next = arr[i + 1];

            if (current < next) {
                array.push(((next - current) / current) * 100);
            } else if (current > next) {
                array.push(((current - next) / current) * 100);
            }
        }
        // console.log(array);
        return array;
    }

    //array of years for regional, state, and nation
    let regionalArray = trends.trend_comparison.regional;
    let stateArray = trends.trend_comparison.state;
    let nationArray = trends.trend_comparison.nation;

    // Change of amount of jobs over given array of years
    const change = arr => arr[arr.length - 1] - arr[0];

    // Percent change of amount of jobs over given array of years
    const percentChange = arr => {
        let number = ((arr[arr.length - 1] - arr[0]) / arr[arr.length - 1]) * 100;
        return Math.round((number + Number.EPSILON) * 100) / 100 //method for creating two decimal points rounded
    }

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h2>Regional Trends</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col chart'>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            </div>
            <table className="table trendTable">
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
                        <td scope="row">Region</td>
                        <td>{regionalArray[0]}</td>
                        <td>{regionalArray[regionalArray.length - 1]}</td>
                        <td>{change(regionalArray)}</td>
                        <td>{percentChange(regionalArray)}%</td>
                    </tr>
                    {/* State */}
                    <tr>
                        <td scope="row">State</td>
                        <td>{stateArray[0]}</td>
                        <td>{stateArray[stateArray.length - 1]}</td>
                        <td>{change(stateArray)}</td>
                        <td>{percentChange(stateArray)}</td>
                    </tr>
                    {/* Nation */}
                    <tr>
                        <td scope="row">Nation</td>
                        <td>{nationArray[0]}</td>
                        <td>{nationArray[nationArray.length - 1]}</td>
                        <td>{change(nationArray)}</td>
                        <td>{percentChange(nationArray)}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Trends