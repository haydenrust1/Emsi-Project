import React, {useState, useEffect} from 'react';
import API from '../utilities/API'
import axios from 'axios'
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

     const loadData = async () => {
            let jobData = await API.getJobData()
            // let jobData = await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32')
            console.log(jobData.data);
            await setData(jobData.data);
    }
    // function loadData() {
    //     API.getJobData()
    //     .then(res => {
    //         console.log(res.data);
    //         setData(res.data);
    //     })          
    //     .catch(err => console.log(err))
    // }

    return(
        <div className='container'>
            {/* occupation and location */}
            { 
                data ?
                <Title occupation={data.occupation.title} region={data.region.title}/>
                :
                <p>loading</p>
            }
            {/* Summary */}
            {
                data ?
                <Summary summary={data}/>
                :
                <p>loading</p>
            }
            {/* number of jobs */}
            {
                data ?
                <JobAmount amount={data}/>
                :
                <p>loading</p>
            }
            {/* Regional Trends with graph */}
            {/* <Trends trends={data}/> */}
            {/* Industries employing occupation */}
            {/* <IndustryDesire info={data}/> */}
        </div>
    )
}

export default Home;