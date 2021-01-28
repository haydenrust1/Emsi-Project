// Router method will allow for future HTTP calls under the same url parameters
const router = require('express').Router();
const jobsController = require('../../controllers/jobsController')

//Routes to "/api/jobs/"
router.route("/") 
.get(jobsController.jobData)

module.exports = router;