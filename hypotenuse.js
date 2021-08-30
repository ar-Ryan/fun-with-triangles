const sides = document.querySelectorAll('.sideInput');
const hypBtn = document.querySelector('.HypBtn');
const hypAnswer = document.querySelector('#HypAns');


function calculateHypotenuse() {
	const sumOfSquares = sides[0].value*sides[0].value + sides[1].value*sides[1].value;
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	hypAnswer.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
}

hypBtn.addEventListener('click', calculateHypotenuse);