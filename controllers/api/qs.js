const router = require('express').Router();
const { User, Career } = require('../../models');

router.post('/', (req, res) => {
  console.log(req.body);

  Career.create({
    title: req.body.title,
    employer: req.body.employer,
    job_city: req.body.job_city,
    job_state: req.body.job_state,
    publishing_site: req.body.publishing_site,
    apply_link: req.body.apply_link,
  })
    .then((qsDB) => res.json(qsDB))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
