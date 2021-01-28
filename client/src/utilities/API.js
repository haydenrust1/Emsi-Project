import axios from 'axios';

export default {
    getJobData: async function() {
        let responseData = await axios.get("/api/jobs");
        return responseData;
    }
    // getJobData: function() {
    //     return axios.get("/api/jobs")
    // }
}