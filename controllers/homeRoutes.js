const router = require('express').Router();
const { Career, User } = require('../models');
const withAuth = require('../utils/auth');

//main page route

router.get('/', async (req, res) => {
  console.log(req);
  try {
    // Get all jobs and JOIN with user data
    const jobsData = await Career.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const jobs = jobsData.map((job) => job.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('about', {
      jobs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/jobs/:id', async (req, res) => {
  try {
    const jobsData = await Career.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_id'],
        },
      ],
    });

    //plain true is supposed to return only the first record of result set
    const job = jobsData.get({ plain: true });

    res.render('jobs', {
      ...job,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Career }],
    });

    const user = userData.get({ plain: true });

    const profInfo = await User.findAll({
      attributes: { exclude: ['password'] },
      where: {
        id: req.session.user_id,
      },
    });
    console.log(profInfo);

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/quicksearch', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Career }],
    });

    const user = userData.get({ plain: true });

    res.render('quicksearch', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Career }],
    });

    const user = userData.get({ plain: true });

    // res.render('dashboard', {
    //   ...user,
    //   logged_in: true,
    // });

    Career.findAll({
      raw: true,
      where: {
        user_id: req.session.user_id,
      },
    }).then((jobs) => {
      res.render('dashboard', {
        jobs: jobs,
        ...user,
        logged_in: true,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/jobs', withAuth, async (req, res) => {
  console.log(req.session.user_id);
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Career }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    Career.findAll({
      raw: true,
      where: {
        user_id: req.session.user_id,
      },
    })
      .then((jobs) => {
        res.render('jobs', {
          jobs: jobs,
          ...user,
          logged_in: true,
        });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/calendar', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Career }],
    });

    const user = userData.get({ plain: true });

    res.render('calendar', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/quiz', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Career }],
    });

    const user = userData.get({ plain: true });

    res.render('quiz', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//dashboard page
router.get('/dashboard', (req, res) => res.render('dashboard'));

//profile page
router.get('/profile', (req, res) => res.render('profile'));

//calendar page
router.get('/calendar', (req, res) => res.render('calendar'));

//quiz page
router.get('/quiz', (req, res) => res.render('quiz'));

//about page
router.get('/about', (req, res) => res.render('about'));

//quick search page
router.get('/quicksearch', (req, res) => res.render('quicksearch'));

//jobs
router.get('/jobs', (req, res) => res.render('jobs'));

module.exports = router;
