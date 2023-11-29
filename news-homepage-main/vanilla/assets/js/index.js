function openSidebar(){
	const hiddenClass = "nav-menu-hidden";
	const nav = document.querySelector("nav");
	const close = document.querySelector(".nav-menu-close");
	const shadow = document.querySelector(".nav-menu-shadow");
	
	nav.classList.remove(hiddenClass);
	close.classList.remove(hiddenClass);
	shadow.classList.remove(hiddenClass);
	document.body.classList.add("no-scroll");
}

function closeSidebar(){
	const hiddenClass = "nav-menu-hidden";
	const nav = document.querySelector("nav");
	const close = document.querySelector(".nav-menu-close");
	const shadow = document.querySelector(".nav-menu-shadow");
	
	nav.classList.add(hiddenClass);
	close.classList.add(hiddenClass);
	shadow.classList.add(hiddenClass);
	document.body.classList.remove("no-scroll");
}

window.addEventListener("resize", function() {
	if (window.innerWidth > 768)
	  closeSidebar();
 });
 