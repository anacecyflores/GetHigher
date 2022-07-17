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
    user_id: req.session.user_id,
  })
    .then((qsDB) => res.json(qsDB))
    .catch((err) => {
      console.log('error caught');
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
