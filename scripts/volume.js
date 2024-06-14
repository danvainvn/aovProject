var audio = document.getElementById('bg-music');

var volume = document.querySelector(".inputRange");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
});