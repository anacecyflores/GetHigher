const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const qs = require('./qs');
const updateRoutes = require('./updateRoutes');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/qs', qs);
router.use('/update', updateRoutes);

module.exports = router;
