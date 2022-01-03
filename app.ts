const weightInput = document.querySelector<HTMLInputElement>('.weight-input')
const err = document.createElement('p')

// Input clearing on window load
function clearInputField(): void {
	weightInput.value = "";
	}
	window.onload = clearInputField;
  
// Function creates animated stars on navbar
const createStar = () => {
	const star = document.createElement('i')
    const header = document.querySelector('.header')
	star.classList.add('star')
	star.textContent = '.'
	star.style.right = Math.random() * (header.clientWidth) -350 + 'px'
	star.style.top = Math.random() * 150 + 'px'
	star.style.animationDuration = "15s"

	header.append(star)
	const TIME_TO_REMOVE_STAR = 15000
	setTimeout(() => {
		star.remove()
	}, TIME_TO_REMOVE_STAR)
}

setInterval(createStar, 600)

//---------------------

const stats =document.querySelector<HTMLElement>('.stats')
const navbarDiv = document.querySelector<HTMLElement>('.navbar')
const navbar = document.querySelectorAll('.navbar-el')
const result = document.querySelector<HTMLElement>('.result')
const submit = document.querySelector<HTMLElement>('.submit')
const chosePlanetTitle = document.querySelector<HTMLElement>('.chose-planet-title')
const infoDiv = document.querySelector<HTMLElement>('.info')


// Prevent enter  !numbers in input field and show error
submit.addEventListener('click', ()=>{
	let num1 = weightInput.value
	if(!/[^a-zA-Z]/.test(num1)){
		// showing error if not number entered
		err.innerHTML = `>.Error No. 71830 It is not your weight_<br>ToolTip: Try digits from 0 to 9`
		err.classList.add('info-body')
		stats.appendChild(err)
		setTimeout(() => {
			err.remove()
		}, 4000);
	}
	else{
		
		err.remove()
		submit.style.borderStyle = "dashed"
		setTimeout(() => {
			chosePlanetTitle.style.display = "block"
		}, 400);
		setTimeout(() => {
			navbarDiv.style.display = "grid"
		}, 1000);
		err.remove()
}
} )


// Class of each planet with propities
function Planet(name:string, gravity:number, funFact:string) {
	this.name = name,
	this.gravity = gravity,
	this.funFact = funFact,
	this.calculateWeight = function(){// @ts-ignore
		return weightInput.value * this.gravity
	}
}

// Create Planet objects
const mercury = new Planet('Mercury', 0.38, "blabla")
const venus = new Planet('Venus', 0.91, "blabla")
const mars = new Planet('Mars', 0.38, "blabla")
const jupiter = new Planet('Jupiter', 2.54, "blabla")
const saturn = new Planet('Saturn', 1.08, "blabla")
const uranus = new Planet('Uranus', 0.91, "blabla")
const neptun = new Planet('Neptun', 1.19, "blabla")
const pluto = new Planet('Pluto', 0.06, "blabla")
const moon = new Planet('Moon', 0.17, "blabla")
const sun = new Planet('Sun', 27.9, "blabla")
const blackHole = new Planet('NGC_4889', 754, "blabla")

// calculating weight based on Planets gravity force
function planetWeightCalc(index: number) {
	result.style.opacity = '0'
	result.style.transition = '300ms ease'
	infoDiv.style.backgroundImage = "none"
	

setTimeout(() => {// @ts-ignore
	
	result.innerHTML = `On ${arr[index].name} you will weight ${Math.floor(arr[index].calculateWeight())} kg`
	result.style.opacity = '1'
}, 300);	
}


// assign objects to array 
const arr = [mercury, venus, mars, jupiter, saturn, uranus, neptun, pluto, moon, sun, blackHole]
	//Black Hole Animation 
	function bhAnimation(index:number) {
		if(arr[index] == blackHole){
			stats.style.animationPlayState = 'running'
			const infoDiv = document.querySelector<HTMLElement>('.info')
			infoDiv.style.animationPlayState = 'running'
			infoDiv.style.transition = "ease 300ms"

		}
	}

	// show Planet image for each planet
	function showPlanetPhoto(index) {
	const celestialBody = document.querySelector<HTMLElement>('.celestial-body')
	celestialBody.style.display = "block"
		celestialBody.style.opacity = "0"
		celestialBody.style.transition = "opacity 300ms ease"
		setTimeout(() => {
			celestialBody.style.backgroundImage = `url(./img/${arr[index].name}.png)`
			celestialBody.style.opacity = "1"
		}, 600);
}

function assignFetchedData(index:number, facts) {
	const infoTitle = document.querySelector<HTMLElement>('.info-title')
	let factName = arr[index].name
	infoTitle.innerHTML = `${arr[index].name}`
	infoTitle.style.marginTop = "-8vh"
	const infoBody = document.querySelector<HTMLElement>('.info-body').innerHTML = `<span>Size: </span>${facts[`${factName}`].Size} <br>
	<span> Temperature: </span> ${facts[`${factName}`].Temp}'C <br>
	<span>Info: </span> ${facts[`${factName}`].FunFact}_`
}


// Main Function. Creating table with Planet names and showing info/picture on another tab

navbar.forEach((elem, index)=>{
	//assign planet to each tab
	elem.innerHTML += `${arr[index].name}`
	elem.addEventListener('click', ()=>{
		//specific animation for blackHole object
		bhAnimation(index)
		//fetching Planet info from json file / assign to Stats tab
		fetch('./facts.json')
	.then(function  (response) {
	  return response.json();
	})
	.then(function (facts){
		assignFetchedData(index, facts)
		// show Planet image for each planet
		showPlanetPhoto(index)
	})
			planetWeightCalc(index)
	})
})


