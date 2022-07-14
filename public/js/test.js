$(document).ready(function () {
  $('#five-day-forecast').hide();
  $('#daily-forecast').hide();

  // var cityHistory = JSON.parse(localStorage.getItem('historyKey')) || [];

  if (cityHistory !== null) {
    cityHistory.forEach(function (cityHistory) {
      $('.recentHistory').append(
        $(
          `<button id="recBtn" class= "recBtn list-group-item list-group-item-action">${cityHistory}</button>`
        )
      );
    });
  }
});

var cityHistory = [];

function searchWeather(city) {
  var apiKey = 'b6a631faf48ec36736fa91299da2f0a2';

  var cityHistory = JSON.parse(localStorage.getItem('historyKey')) || [];

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
    //check for duplicate search before putting into array
    if (!cityHistory.includes(cityInput)) {
      cityHistory.push(cityInput);
      var cityList = $(
        `<button class="recBtn list-group-item list-group-item-action">${cityInput}</button>`
      );
      // console.log(cityList);
      $('.recentHistory').append(cityList);
    }
    localStorage.setItem('historyKey', JSON.stringify(cityHistory));
    // console.log(cityHistory.length);

    $('#daily-forecast').show();

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

    // function fiveCast() {
    //   //5 DAYS
    //   console.log(cityInput);
    //   $.ajax({
    //     type: 'GET',
    //     url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&APPID=${apiKey}`,
    //     id: 'city',
    //   }).then(function (data) {
    //     // console.log(data.list);
    //     // console.log(data.list[0]);
    //     // console.log(data.list[0].dt);
    //     // console.log(data.list[0].main.temp);

    //     for (i = 10; i < 42; i += 7) {
    //       var forecastCard = $('<div class = "card col">');
    //       var forecastTitle = $('<p class = "castDate">');
    //       var forecastTemp = $('<p class = "temp">');
    //       var forecastWind = $('<p class = "wind">');
    //       var forecastHumidity = $('<p class = "humid">');

    //       var date = new Date((data.list[i].dt *= 1000));
    //       // console.log(date);

    //       var currentTime = moment(date).format('MM/DD/YYYY');

    //       iconData = `<img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png"/>`;
    //       forecastTitle.html(`${currentTime} ${iconData}`);
    //       forecastTemp.text(`Temperature: ${data.list[i].main.temp}`);
    //       forecastWind.text(`Wind: ${data.list[i].wind.speed}`);
    //       forecastHumidity.text(`Humidity: ${data.list[i].main.humidity}`);

    //       $(`.forecastRow`).append(forecastCard);
    //       forecastCard.append(forecastTitle);
    //       forecastCard.append(forecastTemp);
    //       forecastCard.append(forecastWind);
    //       forecastCard.append(forecastHumidity);
    //     }
    //   });
    // }
  } else {
    $('#inputError').text('Please enter a city');
  }
}

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

$('#recentHistory').on('click', (e) => {
  var element = e.target;
  // console.log(element);
  var elementHistory = $(element).html();
  // console.log(elementHistory);
  if (elementHistory !== 'Search') {
    searchWeather(elementHistory);
  }
});
