import "./html/components/header.html";
import Slider from "./scripts/components/slider";
import anime from 'animejs/lib/anime.es.js';

const sliderOptions = {
	prevBtn: '.prev',
	nextBtn: '.next',
	bank: '.testimonials__slider-images',
	frame: '.testimonials__img > img'
};

const slider = new Slider(sliderOptions);
slider.observe();

window.addEventListener('scroll', function(e) {
	const scrollHeight = document.body.scrollHeight;
	const btn = document.querySelector('.btn-up');

	if (this.window.scrollY >= scrollHeight / 3) {
		btn.classList.add('show-btn');
	} else {
		btn.classList.remove('show-btn');
	}
});

document.querySelector('.btn-up').addEventListener('click', function() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

window.onload = () => {
const textWrapper6 = document.querySelector('.above-fold__title');
textWrapper6.innerHTML = textWrapper6.textContent.replace(/\s?(\w+)\s?/g, "<span class='letter-b'>$&</span>");
document.querySelectorAll('.letter-b').forEach(function(el) {
	el.innerHTML = el.textContent.replace(/\S/g, '<span class="letter">$&</span>');
	console.log(el);
});

const textWrapper3 = document.querySelector('.above-fold__text');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\s?(\w+)\s?/g, "<span class='letter-b3'>$&</span>");
document.querySelectorAll('.letter-b3').forEach(function(el) {
	el.innerHTML = el.textContent.replace(/\S/g, '<span class="letter">$&</span>');
	console.log(el);
});


anime.timeline({loop: false})
  .add({
    targets: '.letter-b .letter',
   	opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 35 * (i+1)
  });
anime.timeline({loop: false})
  .add({
	targets: '.letter-b3 .letter',
	opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 300,
    delay: (el, i) => 20 * (i+1)
  });
anime.timeline({loop: false})
	.add({
		targets: '.above-fold__form-wrapper',
		opacity: [0, 1],
		duration: 3000,
		easing: 'easeInOutQuad',
	});  
}

let optionsIo = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			anime({
				targets: entry.target,
				opacity: [0, 1],
				duration: 3000
			})
			observer.unobserve(entry.target)
		}
	});
}, optionsIo);

observer.observe(document.querySelector('.title-anime'));


