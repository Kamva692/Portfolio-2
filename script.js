// Loading screen
window.addEventListener("load", function(){
document.getElementById("loader").style.display="none";
});

// Particles
particlesJS("particles-js", {
particles: {
number: { value: 60 },
size: { value: 3 },
color: { value: "#00b3b3" },
line_linked: {
enable: true,
distance: 150,
color: "#00b3b3",
opacity: 0.4
},
move: { speed: 2 }
}
});
