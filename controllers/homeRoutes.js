const router = require('express').Router();
const { Career, User } = require('../models');
// const withAuth = require('../utils/auth');

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
    res.render('homepage', {
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
    const job = jobsData.get({ plain: false });

    res.render('jobs', {
      ...job,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//----------------------------
//--------jobs ROUTE----------
//----------------------------

//get job list
router.get('/jobs', (req, res) =>
  Career.findAll({ raw: true })
    .then((jobs) => {
      res.render('jobs', {
        jobs: jobs,
      });
    })
    .catch((err) => console.log(err))
);

//Add jobs
router.get('/add', (req, res) => {
  const data = {
    title: 'Network Admin',
    employer: 'Dell',
    location_city: 'Los Angeles',
    location_state: 'CA',
    publishing_site: 'Indeed',
  };

  let { title, employer, location_city, location_state, publishing_site } =
    data;

  //insert into table
  Career.create({
    title: title,
    employer: employer,
    location_city: location_city,
    location_state: location_state,
    publishing_site,
  })
    .then((jobs) => res.redirect('/jobs'))
    .catch((err) => console.log(err));
});

//----------------------------
//--------jobs ROUTE end------
//----------------------------

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Career }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

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

//quick search page
router.get('/weather', (req, res) => res.render('weather'));

module.exports = router;
