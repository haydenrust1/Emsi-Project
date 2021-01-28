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
        <>
        <h1>hello!</h1>
        </>
    )
}

export default Home;