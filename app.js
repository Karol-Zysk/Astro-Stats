var weightInput = document.querySelector('.weight-input');
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
    900
];
function YourWeight(weight, a) {
    var planetWeight = weight * planetGravity[a];
    console.log(planetWeight);
}
YourWeight(3, 3);
console.log(weightInput.value);
var navbar = document.querySelectorAll('.navbar-el');
var mercury = document.querySelector('.mercury');
var venus = document.querySelector('.venus');
var mars = document.querySelector('.mars');
var jupiter = document.querySelector('.jupiter');
var saturn = document.querySelector('.saturn');
var result = document.querySelector('.result');
navbar.forEach(function (elem, index) {
    elem.addEventListener('click', function () {
        console.log(weightInput.value * planetGravity[index]); // @ts-ignore
        result.innerHTML = "Twoja waga na ".concat(elem.textContent, " wynosi ").concat(weightInput.value * planetGravity[index]);
    });
});
