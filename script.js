function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);
function change(){
    switch (document.getElementById("point").value){
        case "lub": document.getElementById('iFrame').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35999.42442390868!2d37.88536520982557!3d55.67222570827555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ac9a24617ddab%3A0xadd8dafa914e4d5f!2z0J_QvtC70LjQs9C-0L0g0KLQkdCeINCa0L7RgNC10L3QtdCy0L4!5e0!3m2!1sru!2srs!4v1651922755343!5m2!1sru!2srs"; break;
        case "pushk": document.getElementById('iFrame').src = "<https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35705.985576765815!2d37.82312669622545!3d55.99054158800676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b52f28ccc9ea37%3A0x524d446006fdeca1!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQn9Cw0YDQug!5e0!3m2!1sru!2srs!4v1651934557943!5m2!1sru!2srs"; break;
        case "reut": document.getElementById('iFrame').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17959.6463828883!2d37.854025342965166!3d55.75927005551342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aca4d99765559%3A0xcbf82e8993644c7b!2z0JPQvtGA0L7QtNGB0LrQvtC5INCg0LXRg9GC0L7QstGB0LrQuNC5INCf0LDRgNC6!5e0!3m2!1sru!2srs!4v1651926574484!5m2!1sru!2srs"; break;
    }
    }
