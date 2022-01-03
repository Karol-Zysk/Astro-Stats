var weightInput = document.querySelector('.weight-input');
var err = document.createElement('p');
// Input clearing on window load
function clearInputField() {
    weightInput.value = "";
}
window.onload = clearInputField;
// Function creates animated stars on navbar
var createStar = function () {
    var star = document.createElement('i');
    var header = document.querySelector('.header');
    star.classList.add('star');
    star.textContent = '.';
    star.style.right = Math.random() * (header.clientWidth) - 350 + 'px';
    star.style.top = Math.random() * 150 + 'px';
    star.style.animationDuration = "15s";
    header.append(star);
    var TIME_TO_REMOVE_STAR = 15000;
    setTimeout(function () {
        star.remove();
    }, TIME_TO_REMOVE_STAR);
};
setInterval(createStar, 600);
//---------------------
var stats = document.querySelector('.stats');
var navbarDiv = document.querySelector('.navbar');
var navbar = document.querySelectorAll('.navbar-el');
var result = document.querySelector('.result');
var submit = document.querySelector('.submit');
var chosePlanetTitle = document.querySelector('.chose-planet-title');
var infoDiv = document.querySelector('.info');
// Prevent enter  !numbers in input field and show error
submit.addEventListener('click', function () {
    var num1 = weightInput.value;
    if (!/[^a-zA-Z]/.test(num1)) {
        // showing error if not number entered
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
// Class of each planet with propities
function Planet(name, gravity, funFact) {
    this.name = name,
        this.gravity = gravity,
        this.funFact = funFact,
        this.calculateWeight = function () {
            return weightInput.value * this.gravity;
        };
}
// Create Planet objects
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
// calculating weight based on Planets gravity force
function planetWeightCalc(index) {
    result.style.opacity = '0';
    result.style.transition = '300ms ease';
    infoDiv.style.backgroundImage = "none";
    setTimeout(function () {
        result.innerHTML = "On ".concat(arr[index].name, " you will weight ").concat(Math.floor(arr[index].calculateWeight()), " kg");
        result.style.opacity = '1';
    }, 300);
}
// assign objects to array 
var arr = [mercury, venus, mars, jupiter, saturn, uranus, neptun, pluto, moon, sun, blackHole];
//Black Hole Animation 
function bhAnimation(index) {
    if (arr[index] == blackHole) {
        stats.style.animationPlayState = 'running';
        var infoDiv_1 = document.querySelector('.info');
        infoDiv_1.style.animationPlayState = 'running';
        infoDiv_1.style.transition = "ease 300ms";
    }
}
// show Planet image for each planet
function showPlanetPhoto(index) {
    var celestialBody = document.querySelector('.celestial-body');
    celestialBody.style.display = "block";
    celestialBody.style.opacity = "0";
    celestialBody.style.transition = "opacity 300ms ease";
    setTimeout(function () {
        celestialBody.style.backgroundImage = "url(./img/".concat(arr[index].name, ".png)");
        celestialBody.style.opacity = "1";
    }, 600);
}
function assignFetchedData(index, facts) {
    var infoTitle = document.querySelector('.info-title');
    var factName = arr[index].name;
    infoTitle.innerHTML = "".concat(arr[index].name);
    infoTitle.style.marginTop = "-8vh";
    var infoBody = document.querySelector('.info-body').innerHTML = "<span>Size: </span>".concat(facts["".concat(factName)].Size, " <br>\n\t<span> Temperature: </span> ").concat(facts["".concat(factName)].Temp, "'C <br>\n\t<span>Info: </span> ").concat(facts["".concat(factName)].FunFact, "_");
}
// Main Function. Creating table with Planet names and showing info/picture on another tab
navbar.forEach(function (elem, index) {
    //assign planet to each tab
    elem.innerHTML += "".concat(arr[index].name);
    elem.addEventListener('click', function () {
        //specific animation for blackHole object
        bhAnimation(index);
        //fetching Planet info from json file / assign to Stats tab
        fetch('./facts.json')
            .then(function (response) {
            return response.json();
        })
            .then(function (facts) {
            assignFetchedData(index, facts);
            // show Planet image for each planet
            showPlanetPhoto(index);
        });
        planetWeightCalc(index);
    });
});
