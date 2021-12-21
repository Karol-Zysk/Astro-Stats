const weightInput = document.querySelector<HTMLInputElement>('.weight-input')
function init() {
	weightInput.value = "";
	}
	window.onload = init;
    
const createSnow = () => {
	const star = document.createElement('i')
	// const star2 = document.createElement('i')
    const header = document.querySelector('.header')
	star.classList.add('star')
	// star2.classList.add('star2')
	star.textContent = '.'
	// star2.textContent = '.'

	star.style.right = Math.random() * (header.clientWidth) -350 + 'px'
	star.style.top = Math.random() * 150 + 'px'
	star.style.animationDuration = "15s"
	// star2.style.right = Math.random() * (header.clientWidth) + 'px'
	// star2.style.top = Math.random() * 300 + 'px'
	// star2.style.animationDuration = "15s"
	// star.style.opacity = Math.random()
	

	header.append(star)
	// header.append(star2)

	setTimeout(() => {
		star.remove()
		// star2.remove()
	}, 15000)
}

setInterval(createSnow, 600)

const planetGravity: Array<number> = [
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
]



function YourWeight(weight:number, a: number) {

	let planetWeight:number = weight * planetGravity[a]
	console.log(planetWeight)
}

YourWeight(3, 3)

console.log(weightInput.value)
const stats =document.querySelector<HTMLElement>('.stats')
const navbarDiv = document.querySelector<HTMLElement>('.navbar')
const navbar = document.querySelectorAll('.navbar-el')
const mercuryTab = document.querySelector('.mercury')
const venusTab = document.querySelector('.venus')
const marsTab = document.querySelector('.mars')
const jupiterTab = document.querySelector('.jupiter')
const saturnTab = document.querySelector('.saturn')
const result = document.querySelector<HTMLElement>('.result')
const submit = document.querySelector<HTMLElement>('.submit')
const chosePlanetTitle = document.querySelector<HTMLElement>('.chose-planet-title')

submit.addEventListener('click', ()=>{
	submit.style.borderStyle = "solid"
	setTimeout(() => {
		chosePlanetTitle.style.display = "block"
	}, 400);
	setTimeout(() => {
		navbarDiv.style.display = "grid"
	}, 1000);
	
} )

function Planet(name:string, gravity:number, funFact:string) {
	this.name = name,
	this.gravity = gravity,
	this.funFact = funFact,
	this.calculateWeight = function(){// @ts-ignore
		return weightInput.value * this.gravity
	}
}

const mercury = new Planet('Mercury', 56, "blabla")
const venus = new Planet('Venus', 52336, "blabla")
const mars = new Planet('Mars', 546, "blabla")
const jupiter = new Planet('Jupiter', 556, "blabla")
const saturn = new Planet('Saturn', 6, "blabla")
const uranus = new Planet('Uranus', 576, "blabla")
const neptun = new Planet('Neptun', 56, "blabla")
const pluto = new Planet('Pluto', 56, "blabla")
const moon = new Planet('Moon', 56, "blabla")
const sun = new Planet('Sun', 56, "blabla")
const blackHole = new Planet('Black Hole NGC 4889', 56, "blabla")


const arr = [mercury, venus, mars, jupiter, saturn, uranus, neptun, pluto, moon, sun, blackHole]

navbar.forEach((elem, index)=>{
	elem.innerHTML += `${arr[index].name}`
	elem.addEventListener('click', ()=>{
		if(arr[index] == blackHole){
			console.log('pupa')
			stats.style.animationPlayState = 'running'
			const infoDiv = document.querySelector<HTMLElement>('.info').style.animationPlayState = 'running'
		}
		
	
		fetch('./facts.json')
	.then(function  (response) {
	  return response.json();
	})
	.then(function (facts){
		let factName = arr[index].name
		infoDiv.style.transition = "ease 300ms"
		const celestialBody = document.querySelector<HTMLElement>('.celestial-body').style.backgroundImage = `url(./img/${arr[index].name}.png)`
		const infoTitle = document.querySelector<HTMLElement>('.info-title').innerHTML = `${arr[index].name}`
		const infoBody = document.querySelector<HTMLElement>('.info-body').innerHTML = `<span>Size: </span>${facts[`${factName}`].Size} km<br>
		<span>Avarage Temperature: </span> ${facts[`${factName}`].AvarageTemp}'C <br>
		<span>Info: </span> ${facts[`${factName}`].FunFact}_`
	
	}
			)
			result.style.opacity = '0'
			console.log(arr[index].calculateWeight)
			result.style.transition = '300ms ease'
			infoDiv.style.backgroundImage = "none"
			

		setTimeout(() => {// @ts-ignore
			
			result.innerHTML = `On ${arr[index].name} you will weight ${arr[index].calculateWeight()} kg`
			result.style.opacity = '1'

			
	
		}, 300);
			
			
	})
})

const infoDiv = document.querySelector<HTMLElement>('.info')




console.log(arr)