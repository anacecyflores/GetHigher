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
        console.log(response.data.length);

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
          let jobTitle = $(`<p class = "job-title" value = "job_title">`);
          let jobEmployer = $(
            `<p class = "job-employer" value= "employer_name">`
          );
          let jobCity = $(`<p class = "job-city" value = "job_city">`);
          let jobState = $(`<p class = "job-state" value = "job_state">`);
          let jobEmpType = $(
            `<p class = "job-emp-type" value = "job_employment_type">`
          );
          let jobSite = $(`<p class = "job-site" value = "job_publisher">`);
          let jobLink = $(`<p class = "job-link" value = "job_apply_link">`);
          let jobLat = $(
            `<p class = "job-link" style = "display: none" value = "job_latitude">`
          );
          let jobLng = $(
            `<p class = "job-link" style = "display: none" value = "job_longitude">`
          );

          jobTitle.text(jTitle);
          jobEmployer.text(jEmployer);
          jobCity.text(jCity);
          jobState.text(jState);
          jobEmpType.text(jEmpType);
          jobSite.text(jSite);
          jobLink.text(jLink);
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
            `<button type="button" id="${jId}" value = " Job Title: ${
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
            }">FAVORITE</button>`
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

function listJobs(jobTitle, jobEmployer, jobCity, jobState, jobSite, jobLink) {
  const response = fetch(`/api/qs/quicksearch`, {
    method: 'POST',
    body: JSON.stringify({
      title: jobTitle,
      employer: jobEmployer,
      location_city: jobCity,
      location_state: jobState,
      publishing_site: jobSite,
      apply_link: jobLink,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}

//-------------------------------------------

function jobWait() {
  let jobList = document.querySelectorAll('.card button');
  console.log(jobList);

  //console log save button for each appended job listing
  jobList.forEach((buttonEl) => console.log(buttonEl));

  //add eventlistener to each button
  jobList.forEach((buttonEl) =>
    buttonEl.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(e.target.id);

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
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response, console.log(response);
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
