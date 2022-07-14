// const router = require('express').Router();
// const { Jobs } = require('../../models');
const axios = require('axios');
// const withAuth = require('../../utils/auth');

let position = 'Web Developer';
let location = 'Miami';

const URL = 'https://google-jobs-search.p.rapidapi.com/search';
const apiKey = 'f60f2fa76amsh7434b5729e301aep1102b6jsn27b27ce16233';
const apiHost = 'google-jobs-search.p.rapidapi.com';

const options = {
  method: 'GET',
  url: URL,
  params: { query: `${position} in ${location}` },
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': apiHost,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    // console.log(response.data.data[0]);
    // console.log(response.data.data[0].job_title);
    // console.log(response.data.data[0].employer_name);
    // console.log(response.data.data[0].job_city);
    // console.log(response.data.data[0].job_state);
    // console.log(response.data.data[0].job_publisher);
    // console.log(response.data.data[0].job_apply_link);
  })
  .catch(function (error) {
    console.error(error);
  });
