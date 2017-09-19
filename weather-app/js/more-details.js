$(document).ready(function() {
var input = document.getElementById('pac-input')
var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?q= " + input + " &appid=627c45bdea11c60f24e536fd8aa8328a&units=metric";
$.getJSON(weatherUrl,
function (data) {
    var tr;
    for (var i = 0; i < data.list.length; i=i+8) {
        tr = $('<tr/>');
        tr.append("<td>" + data.list[i].dt_txt + "</td>");
        tr.append("<td>" + data.list[i].main.temp + "</td>");
        tr.append("<td>" + data.list[i].weather[0].description + "</td>");
        tr.append("<td>" + data.list[i].wind.speed + "</td>");
        console.log(data.list[i].main.temp)
        $('#moreWeatherDetails').append(tr);
    }
});
});