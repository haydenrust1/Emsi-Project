const router = require('express').Router();

const jobsController = require('../../controllers/jobsController')

//Routes to "/api/jobs"
router.route("/")
// .get(function(req, res) {
//     res.send(jobsController.jobData)
// })
.get(jobsController.jobData)

module.exports = router;