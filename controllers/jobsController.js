const axios = require('axios');

module.exports = {
    jobData: async function(req, res) {
        try{
            let response = await axios.get('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
            res.send(response.data);
        } catch(error) {
        console.log(error);
        }
    }
}
