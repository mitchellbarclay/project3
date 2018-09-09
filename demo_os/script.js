

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
    var x2 = document.getElementById("twitter-timeline");
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

    if (x2.style.height === "563px") {
        x2.style.height = "0px";
    } else {
        x2.style.height = "563px";
    }
}

function app4() {
    var x = document.getElementById("page-4");
    var x2 = document.getElementById("top-bar");
    var x3 = document.getElementById("bottom-bar");
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
    if (x2.style.height === "50px") {
        x2.style.height = "0px";
    } else {
        x2.style.height = "50px";
    }
    if (x3.style.height === "30px") {
        x3.style.height = "0px";
    } else {
        x3.style.height = "30px";
    }

}

function openNike(){
    var x = document.getElementById("nike-web")
    if (x.style.height === "1255px") {
        x.style.height = "0px";
    } else {
        x.style.height = "1255px"
    }
}

function openMacs(){
    var x = document.getElementById("macs-web")
    if (x.style.height === "2000px") {
        x.style.height = "0px";
    } else {
        x.style.height = "2000px"
    }
}

function openAmazon(){
    var x = document.getElementById("amazon-web")
    if (x.style.height === "1100px") {
        x.style.height = "0px";
    } else {
        x.style.height = "1100px"
    }
}


function back(){
    var x = document.getElementById("nike-web")
    var x2 = document.getElementById("macs-web")
    var x3 = document.getElementById("amazon-web")
        if (x.style.height === "1255px") {
        x.style.height = "0px";
    } 
        if (x2.style.height === "2000px") {
        x2.style.height = "0px";
    } 
        if (x3.style.height === "1100px") {
        x3.style.height = "0px";
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

function nikeWP() {
    var x = document.getElementsByClassName('demo-container')[0];
    x.style.backgroundImage = 'url("img/template2.png")';
}

function macsWP() {
    var x = document.getElementsByClassName('demo-container')[0];
    x.style.backgroundImage = 'url("img/template.png")';
}

function amazonWP() {
    var x = document.getElementsByClassName('demo-container')[0];
    x.style.backgroundImage = 'url("img/template3.png")';
}






function closeApp() {
    var x1 = document.getElementById("page-1");
    var x2 = document.getElementById("page-2");
    var x3 = document.getElementById("ads");
    var x4 = document.getElementById("page-3");
    var x5 = document.getElementById("page-4");
    var x6 = document.getElementById("top-bar");
    var x7= document.getElementById("bottom-bar");
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
        if (x5.style.height === "563px") {
        x5.style.height = "0px";
    }
    if (x5.style.opacity === "1") {
        x5.style.opacity = "0";
    }
    if (x6.style.height === "50px") {
        x6.style.height = "0px";
    }
    if (x7.style.height === "30px") {
        x7.style.height = "0px";
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


