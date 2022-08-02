const router = require('express').Router();
const { User, Career } = require('../../models');

router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  const userInfo = User.update(req.body, {
    where: {
      id: req.params.id,
    },
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    country: req.body.country,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    website: req.body.website,
    about: req.body.about,
  });
  if (!userInfo) {
    res.status(404).json({ message: 'Unable to locate user info to update' });
  }
  res.status(200);
});

module.exports = router;
