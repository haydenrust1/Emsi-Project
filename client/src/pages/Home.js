import React, {useState, useEffect} from 'react';
import API from '../utilities/API'
import Title from '../components/Title'
import Summary from '../components/Summary'
import JobAmount from '../components/JobAmount';
import Trends from '../components/Trends';
import IndustryDesire from '../components/employedInfo';

function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        loadData();
    }, [])

     async function loadData() {
        try{
            let jobData = await API.getJobData()
            console.log(jobData);
            setData(jobData.data);
        }catch(error) {
            console.log(error)
        }
    }

    return(
        <div className='container'>
            {/* occupation and location */}
            <Title title={data}/>
            {/* Summary */}
            <Summary summary={data}/>
            {/* number of jobs */}
            <JobAmount amount={data}/>
            {/* Regional Trends with graph */}
            <Trends trends={data}/>
            {/* Industries employing occupation */}
            <IndustryDesire info={data}/>
        </div>
        // <p>h</p>

    )
}

export default Home;