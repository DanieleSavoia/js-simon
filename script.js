//Impostiamo il countdown//

countdown('04/28/2023 09:30:00 AM');

//Impostiamo la funzione//

  function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
  
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
  
    if ( isNaN(dateEnd) ) {
      return;
    }

    timer = setInterval(calculate, 1000);
  
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
                               dateStart.getUTCMonth(),
                               dateStart.getUTCDate(),
                               dateStart.getUTCHours(),
                               dateStart.getUTCMinutes(),
                               dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
  
      if ( timeRemaining >= 0 ) {
        days    = parseInt(timeRemaining / 86400);
        timeRemaining   = (timeRemaining % 86400);
        hours   = parseInt(timeRemaining / 3600);
        timeRemaining   = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining   = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
  
        document.getElementById("days").innerHTML    = parseInt(days, 10);
        document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  
    function display(days, hours, minutes, seconds) {}
  }