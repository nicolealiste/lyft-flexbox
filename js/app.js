 var menuScroll = document.getElementById("menujs"); // conectamos con el id del nav
	
	//Evento
	window.onscroll = function(){
		"use strict";

		//Condiciones para que se aplique
		if(document.body.scrollTop >= 30){ 
			menuScroll.classList.add("menuColor");
			menuScroll.classList.remove("menuSinColors");
		}else {
			menuScroll.classList.add("menuSinColors");
			menuScroll.classList.remove("menuColor");
		}
	};