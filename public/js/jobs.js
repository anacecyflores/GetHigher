function searchWeather(city) {
  // capitalize each first letter
  function capitalize(city) {
    const words = city.split(' ');
    const output = words.map((word) => {
      const firstLetter = word.substring(0, 1).toUpperCase();
      const rest = word.substring(1);

      return `${firstLetter}${rest}`;
    });
    return output.join(' ');
  }

  var cityInput = capitalize(city);

  //clear previous search
  $('#dailyConditions').empty();
  $('.forecastRow').empty();

  //check for empty field
  if (cityInput != '') {
    jobCast(cityInput);

    function jobCast(city) {
      const settings = {
        async: true,
        crossDomain: true,
        url: `https://google-jobs-search.p.rapidapi.com/search?query=Programmer%20in%20${city}&num_pages=1`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'f60f2fa76amsh7434b5729e301aep1102b6jsn27b27ce16233',
          'X-RapidAPI-Host': 'google-jobs-search.p.rapidapi.com',
        },
      };

      $.ajax(settings).done(function (response) {
        // console.log(response.data);

        const dailyTitle = `${response.data[0].job_title}`;
        const dailyEmployer = `${response.data[0].employer_name}`;
        const dailyCity = `${response.data[0].job_city}`;
        const dailyState = `${response.data[0].job_state}`;
        const dailyEmpType = `${response.data[0].job_employment_type}`;
        const dailySite = `${response.data[0].job_publisher}`;
        const dailyLink = `${response.data[0].job_apply_link}`;

        if (dailyTitle != 'null') {
          $('#dailyConditions').append($(`<li>Title: ${dailyTitle}</li>`));
        }
        if (dailyEmployer != 'null') {
          $('#dailyConditions').append(
            $(`<li>Employer: ${dailyEmployer}</li>`)
          );
        }
        if (dailyCity != 'null') {
          $('#dailyConditions').append($(`<li>City: ${dailyCity}</li>`));
        }
        if (dailyState != 'null') {
          $('#dailyConditions').append($(`<li>State: ${dailyState}</li>`));
        }
        if (dailyEmpType != 'null') {
          $('#dailyConditions').append(
            $(`<li>Employment Type: ${dailyEmpType}</li>`)
          );
        }
        if (dailySite != 'null') {
          $('#dailyConditions').append($(`<li>Site: ${dailySite}</li>`));
        }
        if (dailyLink != 'null') {
          $('#dailyConditions').append(
            $(`<li><a href="${dailyLink}">Link to Apply</a></li>`)
          );
        }
      });
    }
  } else {
    $('#inputError').text('Please enter a location');
  }
}

//search by clicking
$('#submitBtn').click(function () {
  var cityInputField = $('#cityInput').val().trim().toLowerCase();
  searchWeather(cityInputField);
});

//search with enter key
$('#cityInput').keypress(function (e) {
  if (e.which === 13) {
    var cityInputEnter = $('#cityInput').val().trim().toLowerCase();
    searchWeather(cityInputEnter);
  }
});
