

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

}

var vid = document.getElementById("adv");
function playVid() { 

    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
}

