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

          let jId = `j ${[i]}`;

          let jobCard = $('<div class = "card col">');
          let jobTitle = $(`<p class = "job-title" value = "${jTitle}">`);
          let jobEmployer = $(
            `<p class = "job-employer" value= "${jEmployer}">`
          );
          let jobCity = $(`<p class = "job-city" value = "${jCity}">`);
          let jobState = $(`<p class = "job-state" value = "${jState}">`);
          let jobEmpType = $(
            `<p class = "job-emp-type" value = "${jEmpType}">`
          );
          let jobSite = $(`<p class = "job-site" value = "${jSite}">`);
          let jobLink = $(`<p class = "job-link" value = "${jLink}">`);
          // let jobBtn = $('<button type=button id=jobBtn>Favorite</button>');

          jobTitle.text(jTitle);
          jobEmployer.text(jEmployer);
          jobCity.text(jCity);
          jobState.text(jState);
          jobEmpType.text(jEmpType);
          jobSite.text(jSite);
          jobLink.text(jLink);

          $(`.forecastRow`).append(jobCard);
          jobCard.append(jobTitle);
          jobCard.append(jobEmployer);
          jobCard.append(jobCity);
          jobCard.append(jobState);
          jobCard.append(jobEmpType);
          jobCard.append(jobSite);
          jobCard.append(jobLink);
          jobCard.append(
            `<button type="button" id="${jId} jobBtn" value = "${jTitle}">Favorite</button>`
          );

          // listJobs(
          //   jobTitle,
          //   jobEmployer,
          //   jobCity,
          //   jobState,
          //   jobEmpType,
          //   jobSite,
          //   jobLink
          // );

          //---------post db fetch------------
          // const response = fetch(`/api/qs`, {
          //   method: 'POST',
          //   body: JSON.stringify({
          //     title: jCity,
          //     employer: jEmployer,
          //     job_city: jCity,
          //     job_state: jState,
          //     publishing_site: jSite,
          //     apply_link: jLink,
          //   }),
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // });
          // if (response.ok) {
          //   document.location.replace('/quicksearch');
          // }
          //---------post db fetch------------
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
  // if (response.ok) {
  //   document.location.replace('/quicksearch');
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

//-------------------------------------------

let jobList = document.querySelector('.forecastRow');

jobList.addEventListener('click', function (e) {
  e.preventDefault();

  let element = e.target;
  let jobEl = $(element).val();
  console.log(jobEl);

  // let jobElVal = $(this).val();
  // console.log(jobElVal);

  //save input to localStorage (key + value)
  // let k = $(this).parent().children('.job-employer').attr('id'); //The whole family is here
  // let v = $(this).parent().children('.description').val();

  // const response = fetch(`/api/qs`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: jobEl,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
});

// async function jobFormHandler(e) {
//   e.preventDefault();
// }

// document
//   .querySelector('.forecastRow')
//   .addEventListener('submit', favFormHandler);
