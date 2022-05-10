export default class Slider {
	/**
	 * 
	 * @param {*} prevBtn 
	 * @param {*} nextBtn 
	 * @param {*} bank 
	 * @param {*} frame 
	 */
	constructor({prevBtn, nextBtn, bank, frame}) {
		this.prevBtn = prevBtn;
		this.nextBtn = nextBtn;
		this.bank = bank;
		this.frame = frame;
		this.index = 1;
	}

	observe() {
		const prev = document.querySelector(this.prevBtn);
		prev.addEventListener("click", (e) => {
			this.listenClickBtn(e)
		});
		const next = document.querySelector(this.nextBtn);
		next.addEventListener("click", (e) => {
			this.listenClickBtn(e)
		});
	}

	listenClickBtn(e) {
		const listOfImages = document.querySelector(this.bank).children;
		const typeOfBtn  = e.target.className;
		const frameObject = document.querySelector(this.frame);

		if (listOfImages.length == this.index) {
			this.index = 0;
		} else if (this.index == -1) {
			this.index = listOfImages.length - 1;
		}
		
		let nextImageSrc = listOfImages[this.index].getAttribute('src');
		this.makeClickAnimation(frameObject);
		frameObject.setAttribute('src', nextImageSrc);
		frameObject.classList.add('change');

		if (typeOfBtn.indexOf(this.nextBtn)) {
			this.index++;
		} else if (typeOfBtn.indexOf(this.prevBtn)) {
			this.index--;
		}
	}

	makeClickAnimation(element) {
		element.animate([
			{opacity: 0},
			{opacity: 1}
		],{
			duration: 1500
		})
	}
}