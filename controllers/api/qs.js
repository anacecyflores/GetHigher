const router = require('express').Router();
const { User, Career } = require('../../models');

router.post('/quicksearch', (req, res) => {
  console.log(req.body);

  Career.create({
    title: req.body.title,
    employer: req.body.employer,
    location_city: req.body.location_city,
    location_state: req.body.location_state,
    publishing_site: req.body.publishing_site,
    apply_link: req.body.apply_link,
    job_latitude: req.body.job_latitude,
    job_longitude: req.body.job_longitude,
    user_id: req.session.user_id,
  })
    .then((qsDB) => res.json(qsDB))
    .catch((err) => {
      console.log('error caught');
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  const savedJob = Career.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!savedJob) {
    res.status(404).json({ message: 'Job not found' });
  }
  res.status(200);
});

router.put('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body.quiz_taken);
    console.log(req.body.quiz_results);
    const userInfo = User.update(req.body, {
      where: {
        id: req.params.id,
      },
      quiz_taken: req.body.quiz_taken,
      quiz_results: req.body.quiz_results,
    });
    if (!userInfo) {
      console.log("doesn't work");
      res
        .status(404)
        .json({ message: 'Unable to find user to update quiz results' });
    }
    console.log('works');
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
