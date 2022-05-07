export default class Menu {
	logo;
	menu;
	list;
	closeBtn;

	constructor()
	{
		this.logo = document.querySelector('.header__logo');
		this.menu = document.querySelector('.header__menu');
		this.list = document.querySelector('.header__list');
		this.closeBtn = document.querySelector('.close-btn');
		this.litenerOpen();
		this.listenerClose();
	}

	litenerOpen() {
		if (window.innerWidth < 767) {
			this.logo.addEventListener('click', () => {
				this.menu.classList.add("open");
				this.list.classList.add("header__list--open");
				this.closeBtn.classList.add("open");
				document.body.style.overflow = "hidden";
			});
		}
	}

	listenerClose() {
		if (window.innerWidth < 767) {
			this.closeBtn.addEventListener('click', () => {
				this.menu.classList.remove("open");
				this.list.classList.remove("header__list--open");
				this.closeBtn.classList.remove("open");
				document.body.style.overflow = "scroll";
			});
		}	
	}
}