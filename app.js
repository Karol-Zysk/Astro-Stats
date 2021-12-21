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
    setTimeout(function () {
        chosePlanetTitle.style.display = "block";
    }, 400);
    setTimeout(function () {
        navbarDiv.style.display = "grid";
    }, 1000);
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
            var infoDiv_1 = document.querySelector('.info').style.animationPlayState = 'running';
        }
        fetch('./facts.json')
            .then(function (response) {
            return response.json();
        })
            .then(function (facts) {
            var factName = arr[index].name;
            infoDiv.style.transition = "ease 300ms";
            var celestialBody = document.querySelector('.celestial-body').style.backgroundImage = "url(./img/".concat(arr[index].name, ".png)");
            var infoTitle = document.querySelector('.info-title').innerHTML = "".concat(arr[index].name);
            var infoBody = document.querySelector('.info-body').innerHTML = "<span>Size: </span>".concat(facts["".concat(factName)].Size, " km<br>\n\t\t<span>Avarage Temperature: </span> ").concat(facts["".concat(factName)].AvarageTemp, "'C <br>\n\t\t<span>Info: </span> ").concat(facts["".concat(factName)].FunFact, "_");
        });
        result.style.opacity = '0';
        console.log(arr[index].calculateWeight);
        result.style.transition = '300ms ease';
        setTimeout(function () {
            infoDiv.style.backgroundImage = "none";
            result.innerHTML = "On ".concat(arr[index].name, " you will weight ").concat(arr[index].calculateWeight(), " kg");
            result.style.opacity = '1';
        }, 300);
    });
});
var infoDiv = document.querySelector('.info');
console.log(arr);
