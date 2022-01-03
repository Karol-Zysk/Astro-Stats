"use strict";
exports.__esModule = true;
exports.preventNotNumbers = exports.inputFieldClear = void 0;
var err = document.createElement('p');
var stats = document.querySelector('.stats');
var navbarDiv = document.querySelector('.navbar');
var chosePlanetTitle = document.querySelector('.chose-planet-title');
var weightInput = document.querySelector('.weight-input');
var submit = document.querySelector('.submit');
function inputFieldClear() {
    weightInput.value = "";
}
exports.inputFieldClear = inputFieldClear;
window.onload = inputFieldClear;
function preventNotNumbers() {
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
}
exports.preventNotNumbers = preventNotNumbers;
