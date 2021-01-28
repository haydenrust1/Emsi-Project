import axios from 'axios';

export default {
    getJobData: async function() {
        return await axios.get("/api/jobs");
        
    }
    // getJobData: function() {
    //     return axios.get("/api/jobs")
    // }
}