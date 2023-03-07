// to resize dynamically with window size

function setWidth() {
    var windowWidth = window.innerWidth;
    var image1 = document.getElementById("stingfish");
    var image2 = document.getElementById("fish2");
    var image3 = document.getElementById("fish3");
    var image4 = document.getElementById("moon");
    var image5 = document.getElementById("waves");
    var image6 = document.getElementById("submarine");
    var text =  document.getElementById("title");
    image1.style.width = windowWidth + "px";
    image2.style.width = windowWidth + "px";
    image3.style.width = windowWidth + "px";
    image4.style.width = windowWidth + "px";
    image5.style.width = windowWidth + "px";
    image6.style.width = 0.4* windowWidth + "px";

  }

// call setWidth when the window is resized
window.addEventListener("resize", setWidth);

// call setWidth initially to set the image width
setWidth();

let moon = document.getElementById("moon")
let waves = document.getElementById("waves")
let submarine = document.getElementById("submarine")
let parallax = document.getElementById('parallax');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    submarine.style.marginTop = value * 1.7 + 'px';
    waves.style.top = value * -1.5 + 'px';
    moon.style.top = value * -1.5 + 'px';
    moon.style.left = value * 1.5 + 'px';
});

let text = document.getElementById("title")
// Flash a text every 1200 msec (change its display from hidden to visible every 1.2 secs)
setInterval(function() {
    text.style.display = (text.style.display == 'none' ? '' : 'none'); 
}, 1000);