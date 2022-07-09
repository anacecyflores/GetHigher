const router = require('express').Router();
const axios = require('axios');

let position = 'Web Developer';
let location = 'Chicago';

const options = {
  method: 'GET',
  url: 'https://google-jobs-search.p.rapidapi.com/search',
  params: { query: `${position} in ${location}` },
  headers: {
    'X-RapidAPI-Key': 'f60f2fa76amsh7434b5729e301aep1102b6jsn27b27ce16233',
    'X-RapidAPI-Host': 'google-jobs-search.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
