export default class Modal {
	constructor() {
		this.listenModal();
	}

	listenModal() {
		const activatedBtn = document.querySelector('.promo__video-thumb');
		const modal = document.querySelector('.modal');
		const container = document.querySelector('.modal__video');
		const coords = container.getBoundingClientRect();

		activatedBtn.addEventListener('click', (e) => {
			modal.classList.add('active');
			document.body.style.overflow = "hidden";

			modal.addEventListener('click', (e) => {
				if (e.clientX > (coords.width + coords.left) || e.clientX < coords.left) {
					modal.classList.remove('ative');
					document.body.style.overflow = "scroll";
					this.stopIframe();
				}
				if (e.clientY > (coords.height + coords.top) || e.clientY < coords.top) {
					modal.classList.remove('active');
					document.body.style.overflow = "scroll";
					this.stopIframe();
				}
			});
		});
	}
}