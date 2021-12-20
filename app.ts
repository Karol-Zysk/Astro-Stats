const weightInput = document.querySelector<HTMLInputElement>('.weight-input')

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
	900
]



function YourWeight(weight:number, a: number) {

	let planetWeight:number = weight * planetGravity[a]
	console.log(planetWeight)
}

YourWeight(3, 3)

console.log(weightInput.value)

const navbar = document.querySelectorAll('.navbar-el')
const mercury = document.querySelector('.mercury')
const venus = document.querySelector('.venus')
const mars = document.querySelector('.mars')
const jupiter = document.querySelector('.jupiter')
const saturn = document.querySelector('.saturn')
const result = document.querySelector('.result')


navbar.forEach((elem, index)=>{
	elem.addEventListener('click', ()=>{// @ts-ignore
		console.log(weightInput.value * planetGravity[index])// @ts-ignore
		result.innerHTML = `Your weight on ${elem.textContent} is ${weightInput.value * planetGravity[index]}kg`
	})
})