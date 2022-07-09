const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const jobRoutes = require('./jobsFetch');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;
