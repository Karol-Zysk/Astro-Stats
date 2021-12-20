var weightInput = document.querySelector('.weight-input');
function init() {
    weightInput.value = "";
}
window.onload = init;
var createSnow = function () {
    var star = document.createElement('i');
    // const star2 = document.createElement('i')
    var header = document.querySelector('.header');
    star.classList.add('star');
    // star2.classList.add('star2')
    star.textContent = '.';
    // star2.textContent = '.'
    star.style.right = Math.random() * (header.clientWidth) - 350 + 'px';
    star.style.top = Math.random() * 150 + 'px';
    star.style.animationDuration = "15s";
    // star2.style.right = Math.random() * (header.clientWidth) + 'px'
    // star2.style.top = Math.random() * 300 + 'px'
    // star2.style.animationDuration = "15s"
    // star.style.opacity = Math.random()
    header.append(star);
    // header.append(star2)
    setTimeout(function () {
        star.remove();
        // star2.remove()
    }, 15000);
};
setInterval(createSnow, 600);
var planetGravity = [
    15,
    35,
    45,
    55,
    900,
    1000,
    123333,
    30000,
    40000,
    70000,
    1232423423532462,
];
function YourWeight(weight, a) {
    var planetWeight = weight * planetGravity[a];
    console.log(planetWeight);
}
YourWeight(3, 3);
console.log(weightInput.value);
var stats = document.querySelector('.stats');
var navbarDiv = document.querySelector('.navbar');
var navbar = document.querySelectorAll('.navbar-el');
var mercuryTab = document.querySelector('.mercury');
var venusTab = document.querySelector('.venus');
var marsTab = document.querySelector('.mars');
var jupiterTab = document.querySelector('.jupiter');
var saturnTab = document.querySelector('.saturn');
var result = document.querySelector('.result');
var submit = document.querySelector('.submit');
var chosePlanetTitle = document.querySelector('.chose-planet-title');
submit.addEventListener('click', function () {
    submit.style.borderStyle = "solid";
    chosePlanetTitle.style.display = "block";
    navbarDiv.style.display = "grid";
});
function Planet(name, gravity, funFact) {
    this.name = name,
        this.gravity = gravity,
        this.funFact = funFact,
        this.calculateWeight = function () {
            return weightInput.value * this.gravity;
        };
}
var mercury = new Planet('Mercury', 56, "blabla");
var venus = new Planet('Venus', 52336, "blabla");
var mars = new Planet('Mars', 546, "blabla");
var jupiter = new Planet('Jupiter', 556, "blabla");
var saturn = new Planet('Saturn', 6, "blabla");
var uranus = new Planet('Uranus', 576, "blabla");
var neptun = new Planet('Neptun', 56, "blabla");
var pluto = new Planet('Pluto', 56, "blabla");
var moon = new Planet('Moon', 56, "blabla");
var sun = new Planet('Sun', 56, "blabla");
var blackHole = new Planet('Black Hole NGC 4889', 56, "blabla");
var arr = [mercury, venus, mars, jupiter, saturn, uranus, neptun, pluto, moon, sun, blackHole];
navbar.forEach(function (elem, index) {
    elem.innerHTML += "".concat(arr[index].name);
    elem.addEventListener('click', function () {
        if (arr[index] == blackHole) {
            console.log('pupa');
            stats.style.animationPlayState = 'running';
        }
        result.style.opacity = '0';
        console.log(arr[index].calculateWeight);
        result.style.transition = '300ms ease';
        setTimeout(function () {
            result.innerHTML = "On ".concat(arr[index].name, " you will weight ").concat(arr[index].calculateWeight());
            result.style.opacity = '1';
        }, 300);
    });
});
console.log(arr);
