import React, {useState, useEffect} from 'react';
import API from '../utilities/API'

function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        loadData();
    }, [])

    function loadData() {
        API.getJobData()
        .then(res => {
            console.log(res.data);
            setData(res.data);
        })
        .catch(error => console.log(error))
    }

    return(
        
        <div className='container'>
            {/* occupation and location */}
            <div className='row'>
                <div className='col'>
                    <h1>{data.occupation.title} in {data.region.title}</h1>
                </div>
            </div>
            {/* Summary */}
            <div className='row'>
                <div className='col'>
                    <h1>{data.occupation.title} in {data.region.title}</h1>
                </div>
            </div>
            {/* Regional Trends: graph */}
            <div className='row'>
                <div className='col'>
                    <h1>{data.occupation.title} in {data.region.title}</h1>
                </div>
            </div>
            {/* Industries employing occupation */}
            <div className='row'>
                <div className='col'>
                    <h1>{data.occupation.title} in {data.region.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;