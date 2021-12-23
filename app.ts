const weightInput = document.querySelector<HTMLInputElement>('.weight-input')
const err = document.createElement('p')
function init(): void {
	weightInput.value = "";
	}
	window.onload = init;
    
const createStar = () => {
	const star = document.createElement('i')
    const header = document.querySelector('.header')
	star.classList.add('star')
	// star2.classList.add('star2')
	star.textContent = '.'
	// star2.textContent = '.'
	star.style.right = Math.random() * (header.clientWidth) -350 + 'px'
	star.style.top = Math.random() * 150 + 'px'
	star.style.animationDuration = "15s"
	

	header.append(star)
	// header.append(star2)

	setTimeout(() => {
		star.remove()
		// star2.remove()
	}, 15000)
}

setInterval(createStar, 600)


// console.log(weightInput.value)
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
	let num1 = weightInput.value
	console.log(num1)
	if(!/[^a-zA-Z]/.test(num1)){
		
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

function Planet(name:string, gravity:number, funFact:string) {
	this.name = name,
	this.gravity = gravity,
	this.funFact = funFact,
	this.calculateWeight = function(){// @ts-ignore
		return weightInput.value * this.gravity
	}
}

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


const arr = [mercury, venus, mars, jupiter, saturn, uranus, neptun, pluto, moon, sun, blackHole]
function planetMath() {
navbar.forEach((elem, index)=>{
	elem.innerHTML += `${arr[index].name}`
	elem.addEventListener('click', ()=>{
		if(arr[index] == blackHole){
			console.log('pupa')
			stats.style.animationPlayState = 'running'
			const infoDiv = document.querySelector<HTMLElement>('.info')
			infoDiv.style.animationPlayState = 'running'
		}
		fetch('./facts.json')
	.then(function  (response) {
	  return response.json();
	})
	.then(function (facts){
		let factName = arr[index].name
		infoDiv.style.transition = "ease 300ms"
		const celestialBody = document.querySelector<HTMLElement>('.celestial-body')
		
		const infoTitle = document.querySelector<HTMLElement>('.info-title')

	
		celestialBody.style.display = "block"
		celestialBody.style.opacity = "0"
		celestialBody.style.transition = "opacity 300ms ease"
		setTimeout(() => {
			celestialBody.style.backgroundImage = `url(./img/${arr[index].name}.png)`
			celestialBody.style.opacity = "1"
		}, 600);
		
		infoTitle.innerHTML = `${arr[index].name}`
		infoTitle.style.marginTop = "-8vh"
		const infoBody = document.querySelector<HTMLElement>('.info-body').innerHTML = `<span>Size: </span>${facts[`${factName}`].Size} <br>
		<span> Temperature: </span> ${facts[`${factName}`].Temp}'C <br>
		<span>Info: </span> ${facts[`${factName}`].FunFact}_`
		// if (`${arr[index].name}` == "NGC_4889"){
		// 	console.log('Its a black hole')
		// 	celestialBody.style.height = "30vw"
		// 	infoTitle.style.marginTop = "-22vh"
		// 	// celestialBody.style.position = "relative"
		// }
	}
			)
			result.style.opacity = '0'
			console.log(arr[index].calculateWeight)
			result.style.transition = '300ms ease'
			infoDiv.style.backgroundImage = "none"
			

		setTimeout(() => {// @ts-ignore
			
			result.innerHTML = `On ${arr[index].name} you will weight ${Math.floor(arr[index].calculateWeight())} kg`
			result.style.opacity = '1'

			
	
		}, 300);
			
			
	})
})
}
planetMath()
const infoDiv = document.querySelector<HTMLElement>('.info')




console.log(arr)