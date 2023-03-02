// evento mouse move = eventos de movimento do mouse
// atrelar ao window, pois está atrelado ao mouse

window.addEventListener("mousemove", function(event) {
    console.log(event.x);
    console.log(event.y);
});