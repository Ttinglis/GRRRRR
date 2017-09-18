var input = document.getElementById('pac-input')
var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?q= " + input + " &appid=627c45bdea11c60f24e536fd8aa8328a&units=metric";
$.getJSON(weatherUrl,
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].list.main.temp + "</td>");
        tr.append("<td>" + data[i].list.weather.description + "</td>");
        tr.append("<td>" + data[i].list.wind.speed + "</td>");
        tr.append("<td>" + data[i].list.dt_text + "</td>");
        tr.append("<td>" + data[i].team + "</td>");
        console.log(data[i].list.main.temp)
        $('#moreWeatherDetails').append(tr);
    }
});