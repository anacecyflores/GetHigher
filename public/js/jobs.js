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
        console.log(response.data);

        var dailyTitle = `Title: ${response.data[0].job_title}`;
        var dailyEmployer = `Employer: ${response.data[0].employer_name}`;
        var dailyCity = `City: ${response.data[0].job_city}`;

        console.log(dailyTitle);

        $('#dailyConditions').append($(`<li>${dailyTitle}</li>`));
        $('#dailyConditions').append($(`<li>${dailyEmployer}</li>`));
        $('#dailyConditions').append($(`<li>${dailyCity}</li>`));
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
