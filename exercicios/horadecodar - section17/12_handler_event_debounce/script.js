// evento debounce: executar evento com um tempo e não toda hora

let timeout;

window.addEventListener('mousemove', function(event) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log(event.x);
    }, 500);
});