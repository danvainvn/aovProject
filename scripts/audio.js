function addId1() {
    const stopped = 
        document.querySelector('.stopbtn');
    const started = 
        document.querySelector('.startbtn');
    stopped.id = 'stopbtn';
    started.id = 'startbtn';
}

function addId2() {
    const stopped = 
        document.querySelector('.stopbtn');
    const started = 
        document.querySelector('.startbtn');
    stopped.id = '';
    started.id = '';
}

var audio = document.getElementById('bg-music');
var startPluginbtn = document.getElementsByClassName('startPluginbtn');
var stopbtn = document.getElementsByClassName('stopbtn');
var startbtn = document.getElementsByClassName('startbtn');
var count = 0;

function startStop() {
    if (count == 0) {
        count = 1;
        audio.play();
    } else {
        count = 0;
        audio.pause();
    }
}

