$(document).ready(function(){
  function functionyMcFunctionFace(){
    var pm = false;
    var timeyMcTimeFace = new Date();
    var hourMcHourFace = timeyMcTimeFace.getHours();
    var secondMcSecondFace = timeyMcTimeFace.getSeconds();
    var minuteMcMinutesFace = timeyMcTimeFace.getMinutes();
    var clockfacewhatever = document.getElementById('clock');
    if(hourMcHourFace >11 && hourMcHourFace != 24 ){
      hourMcHourFace = hourMcHourFace-12;
      var pm = true;
    } else if (hourMcHourFace == 24 ){
      hourMcHourFace = hourMcHourFace - 12;
      var pm = false;
    }else{
      var pm = false;
    }
    if (minuteMcMinutesFace < 10){
      minuteMcMinutesFace = "0"+minuteMcMinutesFace;
    }
    if (secondMcSecondFace < 10){
      secondMcSecondFace = "0"+secondMcSecondFace;
    }
    if(pm === true){
      clockfacewhatever.innerText = hourMcHourFace + ":" + minuteMcMinutesFace + ":" + secondMcSecondFace + " PM";
    }
    else{
      clockfacewhatever.innerText = hourMcHourFace + ":" + minuteMcMinutesFace + ":" + secondMcSecondFace + " AM";
    }
    
  }
  function offsetMcOffsetFace(){
    var offset = new Date().getTimezoneOffset();
    var offsetDisplay = document.getElementById('offset');
    var realoffsetLUL = offset/60;
    var doubleoffset = realoffsetLUL * 2;
    realoffsetLUL = realoffsetLUL - doubleoffset;
    if (realoffsetLUL > 0){
      realoffsetLUL = "+" + realoffsetLUL;
    }
    offsetDisplay.innerText = realoffsetLUL + " hours GMT/UTC";
  }
  function gmTime(){
    var pm = false;
    var timeyMcTimeFace = new Date();
    var offset = new Date().getTimezoneOffset();
    var realoffsetLUL = offset/60
    var hour = timeyMcTimeFace.getHours();
    var hourMcHourFace = hour + realoffsetLUL;
    var secondMcSecondFace = timeyMcTimeFace.getSeconds();
    var minuteMcMinutesFace = timeyMcTimeFace.getMinutes();
    var clockfacewhatever = document.getElementById('gmt');
	if(hourMcHourFace < 1){
	  hourMcHourFace = 24-hourMcHourFace;
	}
	if(hourMcHourFace > 24){
		hourMcHourFace = hourMcHourFace - 24;
	}
    if(hourMcHourFace >11 && hourMcHourFace != 24 ){
      hourMcHourFace = hourMcHourFace-12;
      var pm = true;
    } else if (hourMcHourFace == 24 ){
      hourMcHourFace = hourMcHourFace - 12;
      var pm = false;
    }else{
      var pm = false;
    }
    if (minuteMcMinutesFace < 10){
      minuteMcMinutesFace = "0"+minuteMcMinutesFace;
    }
    if (secondMcSecondFace < 10){
      secondMcSecondFace = "0"+secondMcSecondFace;
    }
    if(pm === true){
      clockfacewhatever.innerText = hourMcHourFace + ":" + minuteMcMinutesFace + ":" + secondMcSecondFace + " PM GMT";
    }
    else{
      clockfacewhatever.innerText = hourMcHourFace + ":" + minuteMcMinutesFace + ":" + secondMcSecondFace + " AM GMT";
    }
  }

  function getSS(){
    var timeyMcTimeFace = new Date();
    var timeofday = timeyMcTimeFace.getHours();
    
    if (timeofday >= 13 && timeofday < 18){
      document.getElementById('setSS').setAttribute('href', 'afternoon.css');
      //document.body.style.backgroundColor = "#ff7c0a";
      console.log("afternoon");
    }

    else if (timeofday >= 6 && timeofday < 13){
      document.getElementById('setSS').setAttribute('href', 'day.css');
      //document.body.style.backgroundColor = "#80d4ea";
      console.log("morning");
    }

    else if (timeofday >= 18 || timeofday < 6){
      document.getElementById('setSS').setAttribute('href', 'night.css');
      //document.body.style.backgroundColor = "#081b42";
      console.log("night");
    }
    else{
      document.getElementById('setSS').setAttribute('href', 'day.css');
    }
  }
  //document.getElementById('setSS').setAttribute('href', 'night.css');
  setInterval(gmTime, 1000);
  setInterval(functionyMcFunctionFace, 1000);
  getSS();
  gmTime();
  functionyMcFunctionFace();
  offsetMcOffsetFace();
  setInterval(getSS, 60000);
});
$.get("https://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html(response.city + ", " + response.country);
    $.getJSON("https://api.apixu.com/v1/current.json?key=564f96b78db14dd5b3e141559173010&q=" + response.city,
      function(weather){
        iconlink = "https:" + weather.current.condition.icon;
        console.log(weather);
        console.log(weather.current);
        $("#icon").html(
          
          "<img src = '" + iconlink + "' / >"
        );
        $("#condition").html(
          "<h2> " + weather.current.condition.text + " </h2>"
        );
        $("#temp").html(
          "<p>" + weather.current.temp_c + "&deg;C </p>"
        )
      });
}, "jsonp");

