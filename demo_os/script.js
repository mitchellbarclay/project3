

function app1() {
    var x = document.getElementById("page-1");
    if (x.style.height === "563px") {
        x.style.height = "0px";
    } else {
        x.style.height = "563px";
    }
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "1";
    }
}

function app2() {
    var x = document.getElementById("page-2");
    if (x.style.height === "563px") {
        x.style.height = "0px";
    } else {
        x.style.height = "563px";
    }
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "1";
    }
}

function app3() {
    var x = document.getElementById("page-3");
    if (x.style.height === "563px") {
        x.style.height = "0px";
    } else {
        x.style.height = "563px";
    }
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "1";
    }
}

function playgame() {
	var x = document.getElementById("ads");
	if (x.style.height === "565px") {
		x.style.height = "0px";
	} else {
		x.style.height = "565px"
	}

	if (x.style.opacity === "1"){
		x.style.opacity = "0";
	} else {
		x.style.opacity = "1";
	}
}




function closeApp() {
    var x1 = document.getElementById("page-1");
    var x2 = document.getElementById("page-2");
    var x3 = document.getElementById("ads");
    var x4 = document.getElementById("page-3");
    if (x1.style.height === "563px") {
        x1.style.height = "0px";
    }
    if (x1.style.opacity === "1") {
        x1.style.opacity = "0";
    }

    if (x2.style.height === "563px") {
        x2.style.height = "0px";
    }
    if (x2.style.opacity === "1") {
        x2.style.opacity = "0";
    }
    if (x3.style.height === "565px") {
        x3.style.height = "0px";
    }
    if (x3.style.opacity === "1") {
        x3.style.opacity = "0";
    }

    if (x4.style.height === "563px") {
        x4.style.height = "0px";
    }
    if (x4.style.opacity === "1") {
        x4.style.opacity = "0";
    }

}


///////YouTube API/////////
 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '600',
          width: '800',
          videoId: 'oemoqEuJdFE',
          playerVars: { 
            'autoplay': 0,
            'controls': 0, 
            'rel' : 0,
            'fs' : 0,
            'title': 0,
            'showinfo':0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        // event.target.playVideo();
    }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 100000000);
        //   done = true;
        // }
    }
    function stopVideo() {
        player.stopVideo();
    }
    function playVideo(){
        player.playVideo();
    }
/////////////////////////////////


////////Timer///////

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneHour = 60 * 59,
        display = document.querySelector('#time');
    startTimer(oneHour, display);
};


