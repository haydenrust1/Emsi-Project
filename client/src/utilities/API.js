import axios from 'axios';

export default {
    // getJobData: async function() {
    //     let responseData = await axios.get("/api/jobs");
    //     return responseData;
    // }
    getJobData: () => axios.get("/api/jobs")
}