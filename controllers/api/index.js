const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const qs = require('./qs');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/qs', qs);

module.exports = router;
