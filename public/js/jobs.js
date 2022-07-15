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

    function jobCast(location) {
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
          let jobCard = $('<div class = "card col">');
          let jobTitle = $('<p class = "job-title">');
          let jobEmployer = $('<p class = "job-employer">');
          let jobCity = $('<p class = "job-city">');
          let jobState = $('<p class = "job-state">');
          let jobEmpType = $('<p class = "job-emp-type">');
          let jobSite = $('<p class = "job-site">');
          let jobLink = $('<p class = "job-link">');
          let jobBtn = $('<button type=button id=jobBtn>Favorite</button>');

          jobTitle.text(`${response.data[i].job_title}`);
          jobEmployer.text(`${response.data[i].employer_name}`);
          jobCity.text(`${response.data[i].job_city}`);
          jobState.text(`${response.data[i].job_state}`);
          jobEmpType.text(`${response.data[i].job_employment_type}`);
          jobSite.text(`${response.data[i].job_publisher}`);
          jobLink.text(`${response.data[i].job_apply_link}`);

          $(`.forecastRow`).append(jobCard);
          jobCard.append(jobTitle);
          jobCard.append(jobEmployer);
          jobCard.append(jobCity);
          jobCard.append(jobState);
          jobCard.append(jobEmpType);
          jobCard.append(jobSite);
          jobCard.append(jobLink);
          jobCard.append(jobBtn);

          // if (dailyTitle != 'null') {
          //   $('#dailyConditions').append($(`<li>Title: ${dailyTitle}</li>`));
          // }
          // if (dailyEmployer != 'null') {
          //   $('#dailyConditions').append(
          //     $(`<li>Employer: ${dailyEmployer}</li>`)
          //   );
          // }
          // if (dailyCity != 'null') {
          //   $('#dailyConditions').append($(`<li>City: ${dailyCity}</li>`));
          // }
          // if (dailyState != 'null') {
          //   $('#dailyConditions').append($(`<li>State: ${dailyState}</li>`));
          // }
          // if (dailyEmpType != 'null') {
          //   $('#dailyConditions').append(
          //     $(`<li>Employment Type: ${dailyEmpType}</li>`)
          //   );
          // }
          // if (dailySite != 'null') {
          //   $('#dailyConditions').append($(`<li>Site: ${dailySite}</li>`));
          // }
          // if (dailyLink != 'null') {
          //   $('#dailyConditions').append(
          //     $(`<li><a href="${dailyLink}">Link to Apply</a></li>`)
          //   );
          // }
        }
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
