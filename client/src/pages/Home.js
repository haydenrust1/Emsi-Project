import React, { useState, useEffect } from 'react';
import API from '../utilities/API'
import Title from '../components/Title'
import Summary from '../components/Summary'
import JobAmount from '../components/JobAmount';
import Trends from '../components/Trends';
import IndustryDesire from '../components/IndustryInfo';

function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        let jobData = await API.getJobData()
        await setData(jobData.data);
    }

    return (
        // Ternary operators allow api data to be passed before react app renders screen
        <div className='container'>
            {/*Title */}
            {
                data ?
                    <Title occupation={data.occupation.title} region={data.region.title} />
                    :
                    <p>loading</p>
            }
            {/* Summary */}
            {
                data ?
                    <Summary summary={data} />
                    :
                    <p>loading</p>
            }
            {/* JobAmount */}
            {
                data ?
                    <JobAmount amount={data} />
                    :
                    <p>loading</p>
            }
            {/* Trends with graph */}
            {
                data ?
                    <Trends trends={data} />
                    :
                    <p>loading</p>
            }
            {/* IndustryInfo: Industries employing occupation */}
            {
                data ?
                    <IndustryDesire info={data} />
                    :
                    <p>loading</p>
            }
        </div>
    )
}

export default Home;