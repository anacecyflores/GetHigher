function searchJobs(position, location) {
  // capitalize each first letter
  function capitalize(position) {
    const words = position.split(' ');
    const output = words.map((word) => {
      const firstLetter = word.substring(0, 1).toUpperCase();
      const rest = word.substring(1);

      return `${firstLetter}${rest}`;
    });
    return output.join(' ');
  }

  let positionInput = capitalize(position);

  // capitalize each first letter
  function capitalize(location) {
    const words = location.split(' ');
    const output = words.map((word) => {
      const firstLetter = word.substring(0, 1).toUpperCase();
      const rest = word.substring(1);

      return `${firstLetter}${rest}`;
    });
    return output.join(' ');
  }

  let locationInput = capitalize(location);

  //clear previous search
  $('#dailyConditions').empty();
  $('.forecastRow').empty();

  //check for empty field
  if (positionInput != '' && locationInput != '') {
    jobCast(positionInput, locationInput);

    function jobCast(position, location) {
      const settings = {
        async: true,
        crossDomain: true,
        url: `https://google-jobs-search.p.rapidapi.com/search?query=${position}%20in%20${location}&num_pages=1`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'f60f2fa76amsh7434b5729e301aep1102b6jsn27b27ce16233',
          'X-RapidAPI-Host': 'google-jobs-search.p.rapidapi.com',
        },
      };

      $.ajax(settings).done(function (response) {
        for (let i = 0; i < response.data.length; i++) {
          let jTitle = `${response.data[i].job_title}`;
          let jEmployer = `${response.data[i].employer_name}`;
          let jCity = `${response.data[i].job_city}`;
          let jState = `${response.data[i].job_state}`;
          let jEmpType = `${response.data[i].job_employment_type}`;
          let jSite = `${response.data[i].job_publisher}`;
          let jLink = `${response.data[i].job_apply_link}`;
          let jLat = `${response.data[i].job_latitude}`;
          let jLng = `${response.data[i].job_longitude}`;

          let jId = `${[i]}`;

          let jobCard = $('<div class = "card col">');
          let jobTitle = $(
            `<p class = "ml-4 mt-4 ext-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl job-title" value = "job_title">`
          );
          let jobEmployer = $(
            `<p class = "ml-4 job-employer" value= "employer_name">`
          );
          let jobCity = $(`<p class = "ml-4 job-city" value = "job_city">`);
          let jobState = $(`<p class = "ml-4 job-state" value = "job_state">`);
          let jobEmpType = $(
            `<p class = "ml-4 job-emp-type" value = "job_employment_type">`
          );
          let jobSite = $(
            `<p class = "ml-4 job-site" value = "job_publisher">`
          );
          let jobLink = $(
            `<p class = "ml-4 job-link" id = "${jLink}" value = "job_apply_link"><a class="inline-flex items-center justify-center px-2.0 py-1.5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" href="${jLink}">Apply Now</a></p>`
          );
          let jobLat = $(
            `<p class = "ml-4 job-link" style = "display: none" value = "job_latitude">`
          );
          let jobLng = $(
            `<p class = "ml-4 job-link" style = "display: none" value = "job_longitude">`
          );

          jobTitle.text(jTitle);
          jobEmployer.text(jEmployer);
          jobCity.text(jCity);
          jobState.text(jState);
          jobEmpType.text(jEmpType);
          jobSite.text(jSite);
          // jobLink.text(jLink);
          jobLat.text(jLat);
          jobLng.text(jLng);

          $(`.forecastRow`).append(jobCard);
          jobCard.append(jobTitle);
          jobCard.append(jobEmployer);
          jobCard.append(jobCity);
          jobCard.append(jobState);
          jobCard.append(jobEmpType);
          jobCard.append(jobSite);
          jobCard.append(jobLink);
          jobCard.append(jobLat);
          jobCard.append(jobLng);

          jobCard.append(
            `<button class="ml-4 no-button inline items-center justify-center px-2.5 py-1.5 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50" type="button" id="${jId}" value = " Job Title: ${
              jTitle +
              ' ' +
              'Link: ' +
              jLink +
              ' ' +
              'Location:' +
              ' ' +
              jCity +
              ',' +
              jState
            }">Favorite</button>`
          );
        }
        jobWait();
      });
    }
  } else {
    if (position == '' && location == '') {
      $('#inputError').text('Please enter a position and a location');
    }
    if (position != '' && location == '') {
      $('#inputError').text('Please enter a position');
    }
    if (position == '' && location != '') {
      $('#inputError').text('Please enter a location');
    }
  }
}

function jobWait() {
  let jobList = document.querySelectorAll('.card button');

  //add eventlistener to each button
  jobList.forEach((buttonEl) =>
    buttonEl.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log(e.target.id);

      let jTitle = document.querySelectorAll('.card p[value="job_title"]')[
        e.target.id
      ].innerText;
      let jEmployer = document.querySelectorAll(
        '.card p[value="employer_name"]'
      )[e.target.id].innerText;
      let jCity = document.querySelectorAll('.card p[value="job_city"]')[
        e.target.id
      ].innerText;
      let jState = document.querySelectorAll('.card p[value="job_state"]')[
        e.target.id
      ].innerText;
      let jSite = document.querySelectorAll('.card p[value="job_publisher"]')[
        e.target.id
      ].innerText;
      let jLink = document.querySelectorAll('.card p[value="job_apply_link"]')[
        e.target.id
      ].id;
      let jLat = document.querySelectorAll('.card p[value="job_latitude"]')[
        e.target.id
      ].innerText;
      let jLng = document.querySelectorAll('.card p[value="job_longitude"]')[
        e.target.id
      ].innerText;

      //------------------post to db----------------------------
      const response = fetch(`/api/qs/quicksearch`, {
        method: 'POST',
        body: JSON.stringify({
          title: jTitle,
          employer: jEmployer,
          location_city: jCity,
          location_state: jState,
          publishing_site: jSite,
          apply_link: jLink,
          job_latitude: jLat,
          job_longitude: jLng,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
      //------------------post to db end------------------------
    })
  );
}
//search by clicking
$('#submitBtn').click(function () {
  const locationInputField = $('#cityInput').val().trim().toLowerCase();
  const positionInputField = $('#positionInput').val().trim().toLowerCase();

  searchJobs(locationInputField, positionInputField);
});
//search with enter key
$('#cityInput').keypress(function (e) {
  if (e.which === 13) {
    const locationInputEnter = $('#cityInput').val().trim().toLowerCase();
    const positionInputEnter = $('#positionInput').val().trim().toLowerCase();
    searchJobs(locationInputEnter, positionInputEnter);
  }
});
