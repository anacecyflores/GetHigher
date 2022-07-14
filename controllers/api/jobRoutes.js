const router = require('express').Router();
const { Career, User } = require('../../models');
// const withAuth = require('../../utils/auth');

//withAuth will need to be added for login only jobs listing

router.get('/', (req, res) =>
  Career.findAll()
    .then((jobs) => {
      console.log(jobs);
      console.log(req);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

// router.post('/', async (req, res) => {
//   console.log(req, res);
//   try {
//     const newJob = await Job.create({
//       ...req.body,
//       // title: req.session.title,
//     });

//     res.status(200).json(newJob);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//withAuth will need to be added for login only jobs list deletes

// router.delete('/:id', async (req, res) => {
//   try {
//     const jobsData = await Job.destroy({
//       where: {
//         id: req.params.id,
//         // title: req.session.title,
//       },
//     });

//     if (!jobsData) {
//       res.status(404).json({ message: 'No job found with this id!' });
//       return;
//     }

//     res.status(200).json(jobsData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
