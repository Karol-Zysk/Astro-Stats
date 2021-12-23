var weightInput = document.querySelector('.weight-input');
var err = document.createElement('p');
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
// console.log(weightInput.value)
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
    var num1 = weightInput.value;
    console.log(num1);
    if (!/[^a-zA-Z]/.test(num1)) {
        err.innerHTML = ">.Error No. 71830 It is not your weight_<br>ToolTip: Try digits from 0 to 9";
        err.classList.add('info-body');
        stats.appendChild(err);
        setTimeout(function () {
            err.remove();
        }, 4000);
    }
    else {
        err.remove();
        submit.style.borderStyle = "dashed";
        setTimeout(function () {
            chosePlanetTitle.style.display = "block";
        }, 400);
        setTimeout(function () {
            navbarDiv.style.display = "grid";
        }, 1000);
        err.remove();
    }
});
function Planet(name, gravity, funFact) {
    this.name = name,
        this.gravity = gravity,
        this.funFact = funFact,
        this.calculateWeight = function () {
            return weightInput.value * this.gravity;
        };
}
var mercury = new Planet('Mercury', 0.38, "blabla");
var venus = new Planet('Venus', 0.91, "blabla");
var mars = new Planet('Mars', 0.38, "blabla");
var jupiter = new Planet('Jupiter', 2.54, "blabla");
var saturn = new Planet('Saturn', 1.08, "blabla");
var uranus = new Planet('Uranus', 0.91, "blabla");
var neptun = new Planet('Neptun', 1.19, "blabla");
var pluto = new Planet('Pluto', 0.06, "blabla");
var moon = new Planet('Moon', 0.17, "blabla");
var sun = new Planet('Sun', 27.9, "blabla");
var blackHole = new Planet('NGC_4889', 754, "blabla");
var arr = [mercury, venus, mars, jupiter, saturn, uranus, neptun, pluto, moon, sun, blackHole];
function planetMath() {
    navbar.forEach(function (elem, index) {
        elem.innerHTML += "".concat(arr[index].name);
        elem.addEventListener('click', function () {
            if (arr[index] == blackHole) {
                console.log('pupa');
                stats.style.animationPlayState = 'running';
                var infoDiv_1 = document.querySelector('.info');
                infoDiv_1.style.animationPlayState = 'running';
            }
            fetch('./facts.json')
                .then(function (response) {
                return response.json();
            })
                .then(function (facts) {
                var factName = arr[index].name;
                infoDiv.style.transition = "ease 300ms";
                var celestialBody = document.querySelector('.celestial-body');
                var infoTitle = document.querySelector('.info-title');
                celestialBody.style.display = "block";
                celestialBody.style.opacity = "0";
                celestialBody.style.transition = "opacity 300ms ease";
                setTimeout(function () {
                    celestialBody.style.backgroundImage = "url(./img/".concat(arr[index].name, ".png)");
                    celestialBody.style.opacity = "1";
                }, 600);
                infoTitle.innerHTML = "".concat(arr[index].name);
                infoTitle.style.marginTop = "-8vh";
                var infoBody = document.querySelector('.info-body').innerHTML = "<span>Size: </span>".concat(facts["".concat(factName)].Size, " <br>\n\t\t<span> Temperature: </span> ").concat(facts["".concat(factName)].Temp, "'C <br>\n\t\t<span>Info: </span> ").concat(facts["".concat(factName)].FunFact, "_");
                // if (`${arr[index].name}` == "NGC_4889"){
                // 	console.log('Its a black hole')
                // 	celestialBody.style.height = "30vw"
                // 	infoTitle.style.marginTop = "-22vh"
                // 	// celestialBody.style.position = "relative"
                // }
            });
            result.style.opacity = '0';
            console.log(arr[index].calculateWeight);
            result.style.transition = '300ms ease';
            infoDiv.style.backgroundImage = "none";
            setTimeout(function () {
                result.innerHTML = "On ".concat(arr[index].name, " you will weight ").concat(Math.floor(arr[index].calculateWeight()), " kg");
                result.style.opacity = '1';
            }, 300);
        });
    });
}
planetMath();
var infoDiv = document.querySelector('.info');
console.log(arr);
