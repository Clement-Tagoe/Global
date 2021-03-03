var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 5000);

var counter2 = 1;
setInterval(function() {
    document.getElementById('a-radio' + counter2).checked = true;
    counter2++;
    if(counter2 > 4) {
        counter2 = 1;
    }
}, 5000);


const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar nav');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
})