const router = require('express').Router();
const { Job } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      title: req.session.title,
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const JobData = await Job.destroy({
      where: {
        id: req.params.id,
        title: req.session.title,
      },
    });

    if (!JobData) {
      res.status(404).json({ message: 'No job found with this id!' });
      return;
    }

    res.status(200).json(JobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
